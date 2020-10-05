import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { accountInfo } from "../utils/baseInput";
// import style from "../assets/RouteStyle/account.module.scss";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Layout from "../components/Layout";
import "../assets/RouteStyle/base.scss";

export default function Account() {
  const dispatch = useDispatch();
  return (
    <Layout>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          oldPassword: Yup.string().required("Required"),
          newPassword: Yup.string().required("Required"),
          confirmPassword: Yup.string().required("Required"),
        })}
        onSubmit={(
          { oldPassword, newPassword, confirmPassword },
          { setSubmitting }
        ) => {
          const formData = new FormData();

          formData.append("oldPassword", oldPassword);
          formData.append("newPassword", newPassword);
          formData.append("confirmPassword", confirmPassword);

          // dispatch(authActions.adminLogin(formData));
        }}
      >
        <Form className={"form--wrapper"}>
          <header>
            <h3>Profile</h3>
          </header>
          <label htmlFor="oldPassword">Old Password</label>

          <Field name="oldPassword" type="oldPassword" />

          <div className={"error__message"}>
            <ErrorMessage name="oldPassword" />
          </div>

          <label htmlFor="newPassword">New Password</label>

          <Field name="newPassword" type="newPassword" />

          <div className={"error__message"}>
            <ErrorMessage name="newPassword" />
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>

          <Field name="confirmPassword" type="confirmPassword" />
          <div className={"error__message"}>
            <ErrorMessage name="newPassword" />
          </div>
         
          <Button type="submit" className="filled">
            Submit
          </Button>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </Layout>
  );
}
