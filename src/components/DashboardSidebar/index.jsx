import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as authActions from "../../redux/actions/authActions";
// import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

export default function useDashboardSideBar() {
  const dispatch = useDispatch();
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
  ];
  return (
    <div className={style["container"]}>
      <ul>
        {routes.map((route, index) => (
          <li key={index * 10}>
            <NavLink activeClassName={style["active"]} to={route.route}>
              {route.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            activeClassName={style["active"]}
            to={"/admin"}
            onClick={() => dispatch(authActions.logout())}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
