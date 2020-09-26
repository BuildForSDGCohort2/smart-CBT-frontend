import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './routes/SignIn'
// const Upload = React.lazy(() => import('./routes/Upload'));

export default function app() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          {/* <Route exact path="/upload" component={Upload} /> */}
        </Switch>
      </Suspense>
    </Router>
  )
}
