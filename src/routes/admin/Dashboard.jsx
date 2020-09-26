import React from "react";
import Layout from "../../components/Layout";
import style from "../../assets/RouteStyle/dashboard.module.scss";
import Table from "../../components/Table";
import Students from "../../components/Students";

export default function Dashboard() {
  const topSection = [
    {
      icon: "",
      name: "Teachers",
      amt: "70000",
    },
    {
      icon: "",
      name: "students",
      amt: "70000",
    },
    {
      icon: "",
      name: "Courses",
      amt: "70000",
    },
    {
      icon: "",
      name: "Questions",
      amt: "70000",
    },
  ];
  return (
    <Layout>
      <div className={style["user__stats"]}>
        {topSection.map((item, index) => {
          return (
            <div key={10 * index} className={style["user__stats--item"]}>
              <div>
                <span>{item.icon} </span>
                <br />
                <span>{item.name} </span>
              </div>
              <span className={style["amt"]}>{item.amt} </span>
            </div>
          );
        })}
      </div>
      {/* <Table/> */}
        <Students/>
    </Layout>
  );
}
