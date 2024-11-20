import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Resellers from "../pages/Resellers";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import { Admins } from "../pages/Admins";
import { useSelector } from "react-redux";
import { Discount } from "@mui/icons-material";

function Main() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  const { isAuthenticated } = useSelector((state) => state.adminLogin);

  // if (isAuthenticated && isLoginRoute) {
  //   return <Navigate to="/" />;
  // }

  // Redirect to login if not authenticated and not on login page
  // if (!isAuthenticated && !isLoginRoute) {
  //   return <Navigate to="/login" />;
  // }


  return (
    <div className={`main ${isLoginRoute ? "login-main-show" : ""}`}>
      <div className={`main-page ${isLoginRoute ? "main-page-show" : ""}`}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/consumers" element={<Users />} />
          <Route path="/resellers" element={<Resellers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admins" element={<Admins />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
