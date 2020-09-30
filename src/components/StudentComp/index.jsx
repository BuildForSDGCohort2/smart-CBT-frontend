import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";
import Button from "../Button";
import useTable from "../Table";
import style from "./index.module.scss";
import * as studentActions from "../../redux/actions/studentActions";
import * as examActions from "../../redux/actions/examActions";
// import PropTypes from "prop-types";
import { inputInfo } from "../../utils/baseInput";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch, useSelector } from "react-redux";

export default function StudentComp() {
  const dispatch = useDispatch();

  const exams = useSelector((state) => state.exam.all_exams);
  const studentData = useSelector((state) => state.student);
  console.log(studentData.students?.students);

  const tableHead = ["Student Reg No", "Name", "Hall", "Department"];
  const keys = ["regNo", "name", "hall", "department"];

  // const tableBody = [
  //   {
  //     studentId: 123,
  //     firstName: "Ade",
  //     lastName: "yusuf",
  //     phoneNum: "hdhd",
  //     courseCode: "hdhd",
  //     email: "hdhd",
  //   },
  // ];

  const [selectCourse, setCourse] = React.useState({ selectCourse: false });
  const [courseCode, setCourseCode] = React.useState({ courseCode: "" });
  const [openBatchUpload, setOpenBatchUpload] = React.useState(false);

  const [editStudentOpen, setEditOpen] = React.useState(false);
  const [deleteStudentOpen, setDelOpen] = React.useState(false);

  const Table = useTable(tableHead, studentData.students?.students, keys);

  const handleEdit = () => {
    setEditOpen(!editStudentOpen);
  };

  const handleDelete = () => {
    setDelOpen(!deleteStudentOpen);
  };
  const handleCourseModal = () => {
    dispatch(studentActions.getStudent(courseCode));
    setCourse({ ...selectCourse, selectCourse: !selectCourse.selectCourse });
  };

  const handleUpload = () => {
    setOpenBatchUpload(!openBatchUpload);
  };

  const handleChange = (e) => {
    setCourseCode(e.target.value);
  };

  React.useEffect(() => {
    dispatch(examActions.getAllExams());

    setCourse({ ...selectCourse, selectCourse: true });
  }, []);

  return (
    <>
      <div className={style["student--container"]}>
        {/* <div className={style["form"]}> */}
        <Formik
          initialValues={{ name: "", regNo: "", hall: "", department: "" }}
          // validationSchema={Yup.object({
          //   email: Yup.string()
          //     .max(15, "Must be 15 characters or less")
          //     // .email("Invalid email address")
          //     .required("Required"),
          //   password: Yup.string().required("Required"),
          // })}
          onSubmit={({ name, regNo, hall, department }, { setSubmitting }) => {
            const formData = new FormData();
            // console.log(values);
            formData.append("name", name);
            regNo && formData.append("regNo", regNo);
            formData.append("department", department);
            formData.append("hall", hall);

            dispatch(studentActions.addStudent(formData, courseCode));
          }}
        >
          <Form className={style["form--wrapper"]}>
            <header>
              <h4>Add Student</h4>
              {/* <FontAwesomeIcon icon={faTimes} onClick={handleEdit} className={style["fa"]}/> */}
            </header>
            {console.log(inputInfo)}
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

            <div>
              <Button type="submit" className="filled">
                Add Student
              </Button>

              <span onClick={handleUpload}> Batch Upload</span>
            </div>

            {/* <button type="submit">Submit</button> */}
          </Form>
        </Formik>

        <div className={style["table"]}>
          {!selectCourse.selectCourse && Table}

          <div className={style["action__area"]}>
            <Button
              type="button"
              className="refresh"
              onClick={() => dispatch(studentActions.getStudent(courseCode))}
            >
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
        {selectCourse.selectCourse && (
          <SelectCourseCode
            handleCourseModal={handleCourseModal}
            exams={exams}
            handleChange={handleChange}
          />
        )}
      </div>
      {openBatchUpload && <OpenBatch openBatch={handleUpload}/>}
      {editStudentOpen && (
        <EditStudent inputInfo={inputInfo} handleEdit={handleEdit} />
      )}
      {deleteStudentOpen && <DeleteStudent handleDelete={handleDelete} />}
    </>
  );
}



const OpenBatch = ({openBatch}) => {
  return (
    <div className={style["open__batch"]}>
      <header>
        <h4>Batch Upload</h4>
      </header>

      <input type="file" name="batchUplaod" id="" accept="text/csv" />
      <Button type="button" className="edit">
        Upload
      </Button>
    </div>
  );
};




const SelectCourseCode = ({ handleCourseModal, exams, handleChange }) => {
  return (
    <div className={style["select__course"]}>
      <header>
        <h3>Select course code</h3>
        <p>Please select a course code to view students</p>
      </header>

      <label htmlFor="selectCourse"></label>
      <select name="courseCode" id="selectCourse" onChange={handleChange}>
        <option value="">Please Select Option</option>;
        {exams?.exams &&
          exams.exams.map((exam) => {
            return <option value={exam.id}>{exam.courseCode}</option>;
          })}
      </select>
      <Button
        type="button"
        onClick={() => handleCourseModal()}
        className="edit"
      >
        Submit
      </Button>
    </div>
  );
};



const EditStudent = ({ inputInfo, handleEdit, regNo }) => {
  // console.log(inputInfo);
  return (
    <div className={style["edit__student"]}>
      <Formik
        initialValues={{ studentRegNo: "", lastName: "", email: "" }}
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
            // console.log("values", Object.values(values[index]));
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
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleEdit}
              className={style["fa"]}
            />
          </header>
          <div className={style["student__id"]}>
            <label htmlFor="studentId">Student Id</label>
            <Field name="studentId" type="text"  />
            <Button className="edit" type="button" onClick={()=>studentActions.verifyStudent(1, regNo)}>
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

const DeleteStudent = ({ handleDelete }) => {
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
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleDelete}
              className={style["fa"]}
            />
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

// StudentComp.propTypes = {
//   EditStudent: PropTypes.isRequired,
//   DeleteStudent: PropTypes.isRequired,
// };
