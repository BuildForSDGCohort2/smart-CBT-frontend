import React from "react";
import DashboardSideBar from "./DashboardSidebar";

import style from "../assets/RouteStyle/layout.module.scss";
import DashboardTopBar from "./DashboardTopBar";
import useDashboardSideBar from "./DashboardSidebar";

export default function Layout({ children, ...props }) {
  

  const [user, setUser] = React.useState(null);

  const lecturerSideBar = useDashboardSideBar("lecturer");
  const adminSideBar = useDashboardSideBar("admin");

  React.useEffect(() => {
    setUser(props.user?.toLowerCase());
  }, []);
  return (
    <>
      {/* {user === "lecturer" ? lecturerSideBar : adminSideBar} */}
      <DashboardTopBar user={user} />
      <div className={style["container"]}>
        <DashboardSideBar />
        <main>{children}</main>
      </div>
    </>
  );
}
