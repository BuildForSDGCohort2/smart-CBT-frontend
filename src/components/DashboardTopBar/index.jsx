import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function DashboardTopBar() {
  return (
    <section className={style["topbar"]}>
      <div>
        <span>Welcome </span>
      </div>
      <div className={style["user__toolbar"]}>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <span>
          <FontAwesomeIcon icon={faUserCircle} />
        </span>
        <span>{"username"}</span>
      </div>
    </section>
  );
}
