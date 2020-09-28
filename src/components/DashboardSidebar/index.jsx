import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

export default function DashboardSideBar() {
  const [openModal, setModal] = React.useState(false);
  const [clickState, setClickState] = React.useState({
    teachers: false,
    student: false,
    upload: false,
    view: false,
    account: false,
  });
  const handleModal = (e) => {
    setModal({...clickState, [e.target.name]:!e.target.name})
    // console.log("clicked", [e.target.name]);
  };

  console.log(clickState)

  const routes = [
    {
      route: "/admin/dashboard",
      name: "Teachers",
    },
    {
      route: "dashboard/courses",
      name: "Courses",
    },
    {
      route: "dashboard/upload_question",
      name: "Upload Questions",
    },
    {
      route: "dashboard/view_questions",
      name: "View Questions",
    },
    {
      route: "dashboard/account",
      name: "Account",
    },
    {
      route: "/",
      name: "Logout",
    },
  ];
  return (
    <div className={style["container"]}>
      <ul>
        <li>Teachers</li>
        <li onClick={handleModal} name="student">Students</li>
        <li>Courses</li>
        <li>Upload Questions</li>
        <li>View Questions</li>
        <li>Account</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}
