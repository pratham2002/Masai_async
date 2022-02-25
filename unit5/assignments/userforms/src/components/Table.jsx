import React from "react";
import TableInput from "./TableInput";

export default function Table({ userData }) {
  return (
    <>
      Table
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Married</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((data, index) => {
            return <TableInput key={index} data={data} />;
          })}
        </tbody>
      </table>
    </>
  );
}
