import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminRoute from './components/AdminRoute';
import LecturerRoute from './components/LecturerRoute';
import SignIn from './routes/admin/SignIn'
// const Upload = React.lazy(() => import('./routes/Upload'));
const lecturerDashboard = React.lazy(() => import('./routes/lecturer/Dashboard'));
const AdminDashboard = React.lazy(() => import('./routes/admin/Dashboard'));
const Account = React.lazy(() => import('./routes/Account'));
const UploadQuestion = React.lazy(() => import('./routes/UploadQuestion'));
const ViewQuestion = React.lazy(() => import('./routes/ViewQuestions'));
const Student = React.lazy(() => import('./routes/admin/Students'));

export default function app() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
          <AdminRoute exact path="/admin/account" component={Account} />
          <AdminRoute exact path="/admin/upload_question" component={UploadQuestion} />
          <AdminRoute exact path="/admin/view_questions" component={ViewQuestion} />
          <AdminRoute exact path="/admin/student" component={Student} />
          <LecturerRoute exact path="/lecturer/dashboard" component={lecturerDashboard} />
          <LecturerRoute exact path="/lecturer/student" component={Student} />

        </Switch>
      </Suspense>
    </Router>
  )
}
