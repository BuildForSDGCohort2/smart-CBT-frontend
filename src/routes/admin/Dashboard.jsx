import React from "react";
import Layout from "../../components/Layout";
import style from "../../assets/RouteStyle/dashboard.module.scss";
// import Table from "../../components/Table";
import Students from "../../components/Students";
import useTable from "../../components/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync,faQuestionCircle,faList,faPlusCircle } from '@fortawesome/free-solid-svg-icons'

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

  const tableHead = ["Name", "Course", "Location"];

  const tablebody = [
    // { name: "Ade", course: "MHS 600", location: "Lagos" },
    // { name: "Basit", course: "MHS 600", location: "abuja" },
    // { name: "Josh", course: "MHS 702", location: "jos" },
  ];

  const keys = ["name","course", "location"]
  const Table = useTable(tableHead,tablebody,keys);


  // console.log(Table)


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

      {/* Tbody takes an array of key value pairs, key = table name and value = table data */}


      {Table}
      <Misc/>
      {Table}
      {Table}
      {Table}



      {/* <Students /> */}
    </Layout>
  );
}


const Misc = () => {
  return (
    <section className={style["misc"]}>
      <div  className={style["refresh"]}>
        <header><FontAwesomeIcon icon={faSync}/></header>

        <span>Refresh all system data {">>"} click</span>
        <span>Refresh</span>
      </div>
      <div  className={style["questions"]}>
        {" "}
        <header><FontAwesomeIcon icon={faQuestionCircle}/> 20 Questions</header>
        <span>Total Number of Available Questions</span>
        <span>Questions</span>
      </div>
      <div  className={style["user__amt"]}>
        {" "}
        <header><FontAwesomeIcon icon={faList}/></header>
        <span>Total Number of teachers</span>
        <span>Teachers</span>
      </div>
      <div  className={style["courses"]}>
        <header><FontAwesomeIcon icon={faPlusCircle}/></header>
        <span>Total Number of available Course</span>
        <span>Add More</span>
      </div>
    </section>
  );
};