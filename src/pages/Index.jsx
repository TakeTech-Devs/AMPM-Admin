import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Index() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  return (
    <>
      <section className={`admin ${isLoginRoute ? "show" : ""}`}>
        <div className="wrapper">
          {!isLoginRoute && <Sidebar />}
          <div className={`dashboard ${isLoginRoute ? "show" : ""}`}>
            {!isLoginRoute && <Header />}
            <Main />
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
