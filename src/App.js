import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminRoute from './components/AdminRoute';
import LecturerRoute from './components/LecturerRoute';
import StudentRoute from './components/StudentRoute';
import Modal from './components/UploadQuestions/';
import SignIn from './routes/admin/SignIn'
import StudentsPortal from './routes/student';
import UploadQuestion from './routes/UploadQuestion';
// const Upload = React.lazy(() => import('./routes/Upload'));
const lecturerDashboard = React.lazy(() => import('./routes/lecturer/Dashboard'));
const AdminDashboard = React.lazy(() => import('./routes/admin/Dashboard'));
const Account = React.lazy(() => import('./routes/Account'));
// const UploadQuestion = React.lazy(() => import('./routes/UploadQuestion'));
const ViewQuestion = React.lazy(() => import('./routes/ViewQuestions'));
const Student = React.lazy(() => import('./routes/admin/Students'));
// const StartExam = React.lazy(() => import('./routes/StartExam'));

export default function app() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/admin" component={SignIn} />
          <Route exact path="/lecturer" component={SignIn} />
          <Route exact path="/Logout" component={SignIn} />
          <AdminRoute exact path="/" component={SignIn} />

          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
          <AdminRoute exact path="/admin/account" component={Account} />
          <AdminRoute exact path="/admin/upload_question" component={UploadQuestion} />
          <AdminRoute exact path="/admin/view_questions" component={ViewQuestion} />
          <AdminRoute exact path="/admin/student" component={Student} />
          <LecturerRoute exact path="/lecturer/dashboard" component={lecturerDashboard} />
          <LecturerRoute exact path="/lecturer/student" component={Student} />
          <StudentRoute exact path="/student" component={SignIn} />
          <StudentRoute exact path="/start_exam" component={StudentsPortal} />

        </Switch>
      </Suspense>
    </Router>
  )
}
