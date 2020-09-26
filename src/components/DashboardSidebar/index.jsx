import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

export default function DashboardSideBar() {
  const [openModal, setModal] = React.useState(false);
  const handleModal = () => {
    setModal(!openModal);
    console.log("clicked")
  };

  const routes = [
    {
      route: "/admin/dashboard",
      name: "Teachers",
    },
    {
      route: "dashboard/admin/students",
      name: "Students",
      method: () => handleModal(),
    },
    {
      route: "dashboard/admin/courses",
      name: "Courses",
    },
    {
      route: "dashboard/admin/upload_question",
      name: "Upload Questions",
    },
    {
      route: "dashboard/admin/view_questions",
      name: "View Questions",
    },
    {
      route: "dashboard/admin/account",
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
        {routes.map((route, index) => {
          return (
            <li key={10 * index}>
              <NavLink to={route.route} onClick={route.method && route.method}>{route.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
