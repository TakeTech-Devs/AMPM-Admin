import React from "react";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import companyLogo from "../assets/company-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Actions/AdminAction";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';


function Sidebar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.alert("Logged Out Successfully");
    // navigate("/login");
    window.location.href = "/login";

  };

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <NavLink to="/">
            <img src={companyLogo} alt="Company Logo" />
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <NavLink to="/" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li className="d-flex align-items-center">
                <div className="icon1">
                  <HomeIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Home
              </li>
            </NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li className="d-flex align-items-center">
                <div className="icon1">
                  <InfoIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                About Us
              </li>
            </NavLink>
            <NavLink to="/product" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  <Inventory2Icon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Product
              </li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  <AccountBoxIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Contact
              </li>
            </NavLink>
            <NavLink to="/consumers" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  <SupervisorAccountIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Consumers
              </li>
            </NavLink>
            <NavLink to="/resellers" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  <StorefrontIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Resellers
              </li>
            </NavLink>
            <NavLink to="/orders" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  <ShoppingCartIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Orders
              </li>
            </NavLink>
            <NavLink to="/admins" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  <AdminPanelSettingsIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Admins
              </li>
            </NavLink>
            <NavLink onClick={handleLogout} eventKey="link-event-key" className="sidebar-link logout">
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  <LogoutIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Logout
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
