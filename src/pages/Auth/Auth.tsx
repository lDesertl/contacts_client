import React from "react";
import "./Auth.scss";
import { Outlet } from "react-router-dom";
const auth = () => {
  return (
    <div className="auth">
      <Outlet />
    </div>
  );
};

export default auth;
