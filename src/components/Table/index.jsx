import React from "react";

export default function Table(thead, tbody) {
  const tableHead = [
    {
      label: "Name",
    },
    {
      label: "Course",
    },
    {
      label: "Location",
    },
  ];

  //Table takes a body with array of values
  //A user passes an array and then it's pushed to tbody.

  const tableBody = [
    {
      value: ["david kosiso", "MHS 500", "awka kosiso"],
    },
    {
      value: ["david kosiso", "MHS 500", "awka kosiso"],
    },
    {
      value: ["david kosiso", "MHS 500", "awka kosiso"],
    },
  ];

  const tableBody1 = [];

  //   thead.forEach((item) => {
  //     tableHead.push({label:item.tableHead});
  //   });

  const testdata = [
    {
      value: ["a", "b", "c"],
    },
    {
      value: ["d", "e", "f"],
    },
    {
      value: ["i", "j", "k"],
    },
  ];

  testdata.forEach((item) => {
    //  a users passes [kosiso, mathew, james]
    console.log(item)
    tableBody1.push({ value: testdata });
  });

  console.log("tableBody1", tableBody1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHead.map((item, index) => {
              return <th key={10 * index}>{item.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableBody1.map((item) => {
            return (
              <tr>
                {item.value.map((td, index) => {
                //   return <td>{console.log(td.value[index])}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
