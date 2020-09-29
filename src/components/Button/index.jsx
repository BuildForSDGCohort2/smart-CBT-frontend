import React from "react";
import style from "../Button/index.module.scss";

export default function Button({ children, className, type, ...props }) {
  return (
    <div>
      <button className={`${style[className]}`} type={type} {...props}>
        {children}
      </button>
    </div>
  );
}
