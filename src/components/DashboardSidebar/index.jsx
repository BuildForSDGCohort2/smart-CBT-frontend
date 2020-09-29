import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

export default function useDashboardSideBar() {
  const routes = [
    {
      route: "/admin/dashboard",
      name: "Dashboard",
    },
    {
      route: "/admin/student",
      name: "Students",
    },
    {
      route: "/admin/upload_question",
      name: "Upload Questions",
    },
    {
      route: "/admin/view_questions",
      name: "View Questions",
    },
    {
      route: "/admin/account",
      name: "Account",
    },
    {
      route: "/Logout",
      name: "Logout",
    },
  ];
  return (
    <div className={style["container"]}>
      <ul>
        {routes.map((route) => (
          <li>
            <NavLink activeClassName={style["active"]} to={route.route}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
