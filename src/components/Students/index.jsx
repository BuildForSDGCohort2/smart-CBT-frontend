import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";
// import * as studentActions from "../../redux/actions/studentActions";
import Button from "../../Button";
import style from "./index.module.scss";

export default function Students() {
  const [editStudentOpen, setEditOpen] = React.useState(false);
  const [deleteStudentOpen, setDelOpen] = React.useState(false);

  const handleEdit = () => {
    console.log("clicked");
    setEditOpen(!editStudentOpen);
  };

  const handleDelete = () => {
    console.log("clicked");
    setDelOpen(!deleteStudentOpen);
  };
  // const dispatch = useDispatch();

  const inputInfo = [
    {
      htmlFor: "First Name",
      name: "firstName",
      type: "text",
    },
    {
      htmlFor: "Last Name",
      name: "lastName",
      type: "text",
    },
    {
      htmlFor: "Phone",
      name: "phone",
      type: "text",
    },
    {
      htmlFor: "Course Code",
      name: "courseCode",
      type: "number",
    },
    {
      htmlFor: "Email",
      name: "email",
      type: "email",
    },
  ];

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
        <div className={style["table"]}>
          <table>
            <thead>
              <tr>
                {" "}
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Course Code</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>678MS2</td>
                <td>Tobi</td>
                <td>Daniel</td>
                <td>08123456789</td>
                <td>222</td>
                <td>Tobi Daniel@rocketmail</td>
              </tr>
              <tr>
                <td>678MS2</td>
                <td>Tobi</td>
                <td>Daniel</td>
                <td>08123456789</td>
                <td>222</td>
                <td>Tobi Daniel@rocketmail</td>
              </tr>
              <tr>
                <td>678MS2</td>
                <td>Tobi</td>
                <td>Daniel</td>
                <td>08123456789</td>
                <td>222</td>
                <td>Tobi Daniel@rocketmail</td>
              </tr>
            </tbody>
          </table>
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
