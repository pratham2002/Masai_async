import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <>
      <span>Dashboard </span>
      <Link to="/login"> Login </Link>
      <Link to="/users"> Users </Link>
      <Link to="/posts"> Posts </Link>
    </>
  );
}
