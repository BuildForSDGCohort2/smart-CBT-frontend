import React from "react";
import Layout from "../../components/Layout";
import style from "../../assets/RouteStyle/dashboard.module.scss";
// import Table from "../../components/Table";
import DashboardTables from "../../components/DashboardTables";
import * as studentActions from "../../redux/actions/studentActions";

import useTable from "../../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSync,
  faQuestionCircle,
  faList,
  faPlusCircle,
  faUsers,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const topSection = [
    {
      icon: <FontAwesomeIcon icon={faUsers} />,
      name: "Teachers",
      amt: "70000",
    },
    {
      icon: <FontAwesomeIcon icon={faUserGraduate} />,
      name: "students",
      amt: "70000",
    },
    {
      icon: <FontAwesomeIcon icon={faBook} />,
      name: "Courses",
      amt: "70000",
    },
    {
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
      name: "Questions",
      amt: "70000",
    },
  ];

  const tableHead = ["Teacher ID", "First Name", "Last Name", "Email"];
  const RegisteredStudentsTable = [
    "Student ID",
    "First Name",
    "Last Name",
    "Email",
  ];
  const uploadedCoursesHead = ["Course ID", "Course title", "Course Code"];
  // const tableHead = ["Teacher ID", "First Name", "Last Name", "Email"];

  const studentTablebody = [
    {
      studentId: "001",
      firstName: "MHS 600",
      lastName: "adegbite",
      email: "Victoria@mail ",
    },
    {
      studentId: "002",
      firstName: "MHS 600",
      lastName: "adegbite",
      email: "abuja@email",
    },
    {
      studentId: "003",
      firstName: "MHS 702",
      lastName: "adegbite",
      email: "jos@email",
    },
  ];

  const tablebody = [
    { name: "Ade", course: "MHS 600", email: "Lagos" },
    { name: "Basit", course: "MHS 600", email: "abuja" },
    { name: "Josh", course: "MHS 702", email: "jos" },
  ];

  const keys = ["studentId", "firstName", "lastName", "email"];
  const Table = useTable(tableHead, tablebody, keys);
  const studentTable = useTable(
    RegisteredStudentsTable,
    studentTablebody,
    keys
  );
  const uploadTable = useTable(uploadedCoursesHead, tablebody, keys);
  // const Table = useTable(tableHead, tablebody, keys);

  // console.log(Table)

  const dispatch = useDispatch();
  const state = useSelector((state) => console.log(state));

  React.useEffect(() => {
    dispatch(studentActions.getStudent(401));
  }, []);

  return (
    <Layout>
      <div className={style["user__stats"]}>
        {topSection.map((item, index) => {
          return (
            <div key={10 * index} className={style["user__stats--item"]}>
              <div>
                <span>{item.icon} </span>
                <span>{item.name} </span>
              </div>
              <span className={style["amt"]}>{item.amt} </span>
            </div>
          );
        })}
      </div>

      {/* Tbody takes an array of key value pairs, key = table name and value = table data */}

      {Table}
      <Misc />
      {studentTable}
      {uploadTable}
      {/* <DashboardTables /> */}
    </Layout>
  );
}

const Misc = () => {
  return (
    <section className={style["misc"]}>
      <div className={style["refresh"]}>
        <header>
          <FontAwesomeIcon icon={faSync} />
        </header>

        <span>Refresh all system data {">>"} click</span>
        <span>Refresh</span>
      </div>
      <div className={style["questions"]}>
        {" "}
        <header>
          <FontAwesomeIcon icon={faQuestionCircle} /> 20 Questions
        </header>
        <span>Total Number of Available Questions</span>
        <span>Questions</span>
      </div>
      <div className={style["user__amt"]}>
        {" "}
        <header>
          <FontAwesomeIcon icon={faList} />
        </header>
        <span>Total Number of teachers</span>
        <span>Teachers</span>
      </div>
      <div className={style["courses"]}>
        <header>
          <FontAwesomeIcon icon={faPlusCircle} />
        </header>
        <span>Total Number of available Course</span>
        <span>Add More</span>
      </div>
    </section>
  );
};
