import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";
import Button from "../Button";
import useTable from "../Table";
import style from "./index.module.scss";
import * as studentActions from "../../redux/actions/studentActions";
import * as examActions from "../../redux/actions/examActions";
import PropTypes from "prop-types";
import { inputInfo } from "../../utils/baseInput";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch, useSelector } from "react-redux";

export default function StudentComp() {
  const dispatch = useDispatch();
  const [selectCourse, setCourse] = React.useState(false);

  const tableHead = [
    "Student ID",
    "First Name",
    "Last Name",
    "Phone Number",
    "Course Code",
    "Email",
  ];
  const keys = [
    "studentId",
    "firstName",
    "lastName",
    "phoneNum",
    "courseCode",
    "email",
  ];

  const tableBody = [
    {
      studentId: 123,
      firstName: "Ade",
      lastName: "yusuf",
      phoneNum: "hdhd",
      courseCode: "hdhd",
      email: "hdhd",
    },
  ];

  const Table = useTable(tableHead, tableBody, keys);
  // const RegisteredStudentsTable = useTable(tableHead, tableBody, keys);
  // const UploadedCoursesTable = useTable(tableHead, tableBody, keys);

  const [editStudentOpen, setEditOpen] = React.useState(false);
  const [deleteStudentOpen, setDelOpen] = React.useState(false);

  const handleEdit = () => {
    setEditOpen(!editStudentOpen);
  };

  const handleDelete = () => {
    setDelOpen(!deleteStudentOpen);
  };

  React.useEffect(() => {
    dispatch(examActions.getAllExams());

    setCourse(true);
    return () => {
      setCourse(false);
    };
  }, []);

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
          <header>
            <h4>Add Student</h4>
            {/* <FontAwesomeIcon icon={faTimes} onClick={handleEdit} className={style["fa"]}/> */}
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

            <Button type="submit" className="filled">
              Add Student
            </Button>
            {/* <button type="submit">Submit</button> */}
          </Form>
        </Formik>

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
        {/* {SelectCourseCode && <SelectCourseCode />} */}
      </div>
      {editStudentOpen && (
        <EditStudent inputInfo={inputInfo} handleEdit={handleEdit} />
      )}
      {deleteStudentOpen && <DeleteStudent handleDelete={handleDelete} />}
    </>
  );
}

const SelectCourseCode = () => {
  return (
    <div className={style["select__course"]}>
      <header>
        <h3>Select course code</h3>
        <p>Please select a course code to view students</p>
      </header>

      <label htmlFor="selectCourse"></label>
      <select name="" id="selectCourse">
        <option value="MME401">MME401</option>
        <option value="MDE401">MDE401</option>
        <option value="MMQ401">MMQ401</option>
      </select>
      <Button type="button" className="edit">
        Submit
      </Button>
    </div>
  );
};

const EditStudent = ({ inputInfo, handleEdit }) => {
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
            <FontAwesomeIcon icon={faTimes} onClick={handleEdit} className={style["fa"]}/>
          </header>
          <div className={style["student__id"]}>
            <label htmlFor="studentId">Student Id</label>
            <Field name="studentId" type="text" />
            <Button className="edit" type="button">
              Verify
            </Button>
          </div>

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

const DeleteStudent = ({handleDelete}) => {
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
            <FontAwesomeIcon icon={faTimes} onClick={handleDelete} className={style["fa"]}/>
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

StudentComp.propTypes = {
  EditStudent: PropTypes.isRequired,
  DeleteStudent: PropTypes.isRequired,
};
