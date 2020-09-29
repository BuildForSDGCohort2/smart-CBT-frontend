import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { accountInfo } from "../utils/baseInput";
import style from "../assets/RouteStyle/account.module.scss";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Account() {
  const dispatch = useDispatch();
  return (
    <Layout>
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

        // dispatch(authActions.adminLogin(formData));
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
    </Layout>
  );
}
