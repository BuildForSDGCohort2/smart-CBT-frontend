import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "../../assets/RouteStyle/signin.module.scss";
import Button from "../../components/Button";

export default function SignIn() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);

  console.log("state",state)

  React.useEffect(() => {
    // dispatch(authActions.adminLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style["form--container"]}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(15, "Must be 15 characters or less")
            // .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={({ email, password }, { setSubmitting }) => {
          const formData = new FormData();

          formData.append("email", email);
          formData.append("password", password);

          dispatch(authActions.adminLogin(formData));
        }}
      >
        <Form className={style["form--wrapper"]}>
          <label htmlFor="email">Email</label>

          <Field name="email" type="email" />

          <div className={style["error__message"]}>
            <ErrorMessage name="email" />
          </div>

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
