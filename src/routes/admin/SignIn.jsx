import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "../../assets/RouteStyle/signin.module.scss";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const initialValues =
    history.location.pathname === "/student"
      ? { passsword: "", regNo: "", exam_id: "1" }
      : { password: "", email: "" };

  // console.log("history", history);
  if (
    auth.isAuth &&
    (history.location.pathname === "/admin" ||
      history.location.pathname === "/lecturer")
  ) {
    history.push("/admin/dashboard");
  } else if (auth.isAuth && history.location.pathname === "/student") {
    console.log("student");
  }

  const handleSubmit = (values) => {
    return history.location.pathname === "/admin"
      ? dispatch(authActions.adminLogin(values))
      : history.location.pathname === "/lecturer"
      ? dispatch(authActions.lecturerLogin(values))
      : history.location.pathname.toLowerCase() === "/student" ||
        history.location.pathname.toLowerCase() === "/"
      ? dispatch(authActions.studentLogin(values))
      : "";
  };

  // React.useEffect(() => {
  //   // dispatch(authActions.adminLogin());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <div className={style["form--container"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          // email: Yup.string()
          //   .max(15, "Must be 15 characters or less")
          //   // .email("Invalid email address")
          //   .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleSubmit(values, setSubmitting);
        }}
      >
        <Form className={style["form--wrapper"]}>
          {history.location.pathname === "/student" ||
          history.location.pathname === "/" ? (
            <>
              <label htmlFor="regNo">Registration Number</label>

              <Field name="regNo" type="number" />

              <div className={style["error__message"]}>
                <ErrorMessage name="regNo" />
              </div>
            </>
          ) : (
            <>
              <label htmlFor="email">Email</label>

              <Field name="email" type="text" />
              <div className={style["error__message"]}>
                <ErrorMessage name="email" />
              </div>
            </>
          )}

          <label htmlFor="password">Password</label>

          <Field name="password" type="password" />

          <div className={style["error__message"]}>
            <ErrorMessage name="password" />
          </div>
          <Button type="submit" className="filled">
            {/* { ? "Loading":"Submit"} */}
            Submit
          </Button>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </div>
  );
}
