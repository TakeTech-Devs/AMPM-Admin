import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

function Main() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  return (
    <div className={`main ${isLoginRoute ? "login-main-show" : ""}`}>
      <div className={`main-page ${isLoginRoute ? "main-page-show" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consumers" element={<Users />} />
          <Route path="/resellers" element={<Resellers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admins" element={<Admins />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
