import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoutes from './components/ProtectedRoute';
import SignIn from './routes/admin/SignIn'
// const Upload = React.lazy(() => import('./routes/Upload'));
const Dashboard = React.lazy(() => import('./routes/Dashboard'));
const Account = React.lazy(() => import('./routes/Account'));
const Student = React.lazy(() => import('./routes/admin/Students'));

export default function app() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <ProtectedRoutes exact path="/admin/dashboard" component={Dashboard} />
          <ProtectedRoutes exact path="/admin/account" component={Account} />
          <ProtectedRoutes exact path="/admin/student" component={Student} />

        </Switch>
      </Suspense>
    </Router>
  )
}
