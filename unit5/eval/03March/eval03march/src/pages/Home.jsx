import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { isLoogedIn } = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      Home
      {!isLoogedIn && <h1>Login Required</h1>}
      {/* {<Navigate to="/login">Kindly Login to contiue</Navigate>} */}
    </div>
  );
}
