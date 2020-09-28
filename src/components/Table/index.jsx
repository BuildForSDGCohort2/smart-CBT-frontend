import React from "react";
import style from './index.module.scss'

export default function Table({ thead, tbody }) {

  /* Tbody accepts an array of key value pairs, key = table name and value = table data */
  /* thead accepts an array of table Names */

  let th = thead ? thead : "";
  let td = tbody ? tbody : "";

  const createData = (column) => {
    return column;
  };
  const tableBody = [];

  td &&
    td.forEach((item, index) => {
      tableBody.push(createData(item));
    });

  return (
    <div className={style["table"]}>
      <table>
        <thead>
          <tr>
            {th &&
              th.map((item, index) => {
                return <th key={10 * index}>{item}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((tbody, index) => {
            return (
              <tr key={index * 11}>
                {th.map((item, index) => {
                  return <td key={index}>{tbody[item.toLowerCase()]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
