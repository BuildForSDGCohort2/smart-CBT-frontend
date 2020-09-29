import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

export default function DashboardSideBar({route}) {
  const [openModal, setModal] = React.useState(false);


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
