import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

export default function DashboardSideBar() {
  const routes = [
    {
      route: "dashboard/admin/teachers",
      name: "Teachers",
    },
    {
      route: "dashboard/admin/students",
      name: "Students",
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
        {routes.map((route,index) => {
          return (
            <li key={10*index}>
              <NavLink to={route.route}>{route.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
