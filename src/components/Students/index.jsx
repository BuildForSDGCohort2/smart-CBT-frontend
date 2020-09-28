import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";
// import * as studentActions from "../../redux/actions/studentActions";
import Button from "../../Button";
import useTable from "../Table";
import style from "./index.module.scss";
import PropTypes from "prop-types";
import { inputInfo } from "../../utils/baseInput";

export default function Students() {
  const tableHead = ["Teacher ID", "First Name", "Last Name", "Email"];
  const keys = ["teacherId", "firstName", "lastName", "email"];

  const tableBody = [
    {
      teacherId: 123,
      firstName: "Ade",
      lastName: "yusuf",
      email: "hdhd",
    },
  ];

  const Table = useTable(tableHead, tableBody, keys);
  const RegisteredStudentsTable = useTable(tableHead, tableBody, keys);
  const UploadedCoursesTable = useTable(tableHead, tableBody, keys);

  const [editStudentOpen, setEditOpen] = React.useState(false);
  const [deleteStudentOpen, setDelOpen] = React.useState(false);

  const handleEdit = () => {
    setEditOpen(!editStudentOpen);
  };

  const handleDelete = () => {
    setDelOpen(!deleteStudentOpen);
  };
  // const dispatch = useDispatch();

  return (
    <>
      <div className={style["student--container"]}>
        {/* <div className={style["form"]}> */}
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          // validationSchema={Yup.object({
          //   email: Yup.string()
          //     .max(15, "Must be 15 characters or less")
          //     // .email("Invalid email address")
          //     .required("Required"),
          //   password: Yup.string().required("Required"),
          // })}
          onSubmit={(values, { setSubmitting }) => {
            const formData = new FormData();

            inputInfo.forEach((item, index) => {
              return formData.append(
                `${item.name}`,
                Object.values(values[index])
              );
            });

            // dispatch(studentActions.addStudent(formData));
          }}
        >
          <Form className={style["form--wrapper"]}>
            {inputInfo.map((item) => {
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

            <Button type="submit" className="filled">
              Add Student
            </Button>
            {/* <button type="submit">Submit</button> */}
          </Form>
        </Formik>
        {/* </div> */}

        {/* <Table tableHead={tableHead} tableBody={tableBody} keys={null} /> */}

        <div className={style["table"]}>
          {Table}

          <div className={style["action__area"]}>
            <Button type="button" className="refresh">
              Refresh
            </Button>
            <Button type="button" className="edit" onClick={() => handleEdit()}>
              Edit
            </Button>
            <Button
              type="button"
              className="delete"
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      {editStudentOpen && <EditStudent inputInfo={inputInfo} />}
      {deleteStudentOpen && <DeleteStudent />}
    </>
  );
}

const SelectCourseCode = () => {
  return (
    <div>
      <header>
        <h3>Select course code</h3>
      </header>

      <label htmlFor="selectCourse"></label>
      <select name="" id="selectCourse">
        <option value="MME401">MME401</option>
        <option value="MDE401">MDE401</option>
        <option value="MMQ401">MMQ401</option>
      </select>
    </div>
  );
};

const EditStudent = ({ inputInfo }) => {
  console.log(inputInfo);
  return (
    <div className={style["edit__student"]}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        // validationSchema={Yup.object({
        //   email: Yup.string()
        //     .max(15, "Must be 15 characters or less")
        //     // .email("Invalid email address")
        //     .required("Required"),
        //   password: Yup.string().required("Required"),
        // })}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();

          inputInfo.forEach((item, index) => {
            console.log("values", Object.values(values[index]));
            return formData.append(
              `${item.name}`,
              Object.values(values[index])
            );
          });

          // dispatch(studentActions.addStudent(formData));
        }}
      >
        <Form className={style["form--wrapper"]}>
          <header>
            <h4>Edit Student</h4>
          </header>
          {inputInfo.map((item) => {
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

          <Button type="submit" className="edit">
            Update Student
          </Button>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </div>
  );
};

const DeleteStudent = () => {
  return (
    <div className={style["del__student"]}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        // validationSchema={Yup.object({
        //   email: Yup.string()
        //     .max(15, "Must be 15 characters or less")
        //     // .email("Invalid email address")
        //     .required("Required"),
        //   password: Yup.string().required("Required"),
        // })}
        onSubmit={(values, { setSubmitting }) => {
          // const formData = new FormData();
          // dispatch(studentActions.addStudent(formData));
        }}
      >
        <Form className={style["form--wrapper"]}>
          <header>
            <h4>Delete Student</h4>
          </header>

          <label htmlFor="Student Id">Student's ID</label>
          <Field name="studentId" type="number" />

          <div className={style["error__message"]}>
            <ErrorMessage name="studentId" />
          </div>

          <Button type="submit" className="delete">
            Delete Student
          </Button>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </div>
  );
};



Students.propTypes = {
  EditStudent: PropTypes.isRequired,
  DeleteStudent: PropTypes.isRequired,
};
