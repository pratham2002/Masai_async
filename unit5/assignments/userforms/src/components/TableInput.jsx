import React from "react";

export default function TableInput({ data }) {
  console.log(data);

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.address}</td>
      <td>{data.department}</td>
      <td>{data.salary}</td>
      <td>{data.isMarried ? "Yes" : "No"}</td>
      <td>
        <a href={data.profilePic} target="_blank" rel="noreferrer">
          Image
        </a>
      </td>
    </tr>
  );
}
