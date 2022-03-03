import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const loggedin = localStorage.getItem("login");
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Click");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  useEffect(() => {
    if (!loggedin) {
      navigate("/");
    }
  }, [loggedin, navigate]);
  return (
    <>
      <div>Users</div>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}
