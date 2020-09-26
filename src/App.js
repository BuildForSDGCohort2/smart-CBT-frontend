import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoutes from './components/ProtectedRoute';
import SignIn from './routes/admin/SignIn'
// const Upload = React.lazy(() => import('./routes/Upload'));
const Dashboard = React.lazy(() => import('./routes/admin/Dashboard'));

export default function app() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <ProtectedRoutes exact path="/dashboard" component={Dashboard} />

        </Switch>
      </Suspense>
    </Router>
  )
}
