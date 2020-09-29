import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
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
    setModal({ ...clickState, [e.target.name]: !e.target.name });
    // console.log("clicked", [e.target.name]);
  };

  console.log(clickState);

  const routes = [
    {
      route: "/admin/dashboard",
      name: "Teachers",
    },
    {
      route: "/admin/student",
      name: "Students",
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
      route: "/admin/account",
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
        {routes.map((route) => (
          <li>
            <NavLink to={route.route}>{route.name}</NavLink>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
