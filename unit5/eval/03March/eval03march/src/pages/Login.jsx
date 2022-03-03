import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../app/actionTypes";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.isLoggedIn);
  const handleLogin = () => {
    console.log("Login Click");
    dispatch({ type: "LOGIN" });
    navigate("/users");
  };

  return (
    <>
      <div>Login</div>
      {isLoggedIn ? "Yes" : "No"}
      <button onClick={() => handleLogin()}>Login</button>
    </>
  );
}

export default Login;
