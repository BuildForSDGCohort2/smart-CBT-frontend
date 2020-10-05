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
  const history = useHistory().location.pathname;
  // const state = useSelector((state) => state.state);

  const initialValues =
    history === "/student"
      ? { password: "", regNo: "" }
      : { password: "", email: "" };

  console.log("history", history);

  const handleSubmit = (values) => {
    // console.log(email);
    // const formData = new FormData();

    // formData.append("email", email);
    // formData.append("password", password);

    // if(history.location.pathname === "/admin" ){
    //   dispatch(authActions.adminLogin(formData))
    // }

    return history === "/admin"
      ? dispatch(authActions.adminLogin(values))
      : history === "/lecturer"
      ? dispatch(authActions.lecturerLogin(values))
      : history.toLowerCase() === "/student"
      ? dispatch(authActions.studentLogin(values))
      : "";
  };

  React.useEffect(() => {
    // dispatch(authActions.adminLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          console.log("submitting", values);
          // handleSubmit(values);
          return history === "/admin"
          ? dispatch(authActions.adminLogin(values))
          : history === "/lecturer"
          ? dispatch(authActions.lecturerLogin(values))
          : history.toLowerCase() === "/student"
          ? dispatch(authActions.studentLogin(values))
          : "";

        }}
      >
        <Form className={style["form--wrapper"]}>
          {history === "/student" ? (
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
            Submit
          </Button>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </div>
  );
}
