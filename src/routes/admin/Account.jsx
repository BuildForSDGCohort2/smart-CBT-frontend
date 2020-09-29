import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { accountInfo } from "../../utils/baseInput";
import style from "../../assets/RouteStyle/account.module.scss";

export default function Account() {
  return (
    <div>
      {accountInfo.map((item) => {
        return (
          <>
            <label htmlFor={item.htmlFor}>{item.htmlFor}</label>
            <Field name={item.name} type={item.type} />

            <div className={style["error__message"]}>
              <ErrorMessage name={item.name} />
            </div>
          </>
        );
      })}
    </div>
  );
}
