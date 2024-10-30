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
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L3 12H6V21H10V15H14V21H18V12H21L12 3Z" fill="#47ad01" />
                  </svg> */}
                  <HomeIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Home
              </li>
            </NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li className="d-flex align-items-center">
                <div className="icon1">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                    <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                    <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                    <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                  </svg> */}
                  <InfoIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                About Us
              </li>
            </NavLink>
            <NavLink to="/product" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none">
                    <path d="M12 2l8 4-8 4-8-4 8-4zm0 7.2l8 4V18l-8 4-8-4v-4.8l8-4z" fill="#47ad01" />
                  </svg> */}
                  <Inventory2Icon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Product
              </li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none">
                    <path d="M 13 4 C 8.038 4 4 8.037 4 13 L 4 37 C 4 41.963 8.038 46 13 46 L 37 46 C 37.338 46 37.671 45.978406 38 45.941406 L 38 4.0585938 C 37.671 4.0215938 37.338 4 37 4 L 13 4 z M 40 4.5253906 L 40 14 L 46 14 L 46 13 C 46 9.09 43.49 5.7643906 40 4.5253906 z M 22 12 C 29.168 12 35 17.832 35 25 C 35 32.168 29.168 38 22 38 C 14.832 38 9 32.168 9 25 C 9 17.832 14.832 12 22 12 z M 22 14 C 15.935 14 11 18.935 11 25 C 11 27.814 12.071406 30.377219 13.816406 32.324219 C 15.889406 30.225219 18.852 29 22 29 C 25.14 29 28.1135 30.222312 30.1875 32.320312 C 31.9295 30.373313 33 27.812 33 25 C 33 18.935 28.065 14 22 14 z M 40 16 L 40 24 L 46 24 L 46 16 L 40 16 z M 22 18.5 C 24.481 18.5 26.5 20.519 26.5 23 C 26.5 25.481 24.481 27.5 22 27.5 C 19.519 27.5 17.5 25.481 17.5 23 C 17.5 20.519 19.519 18.5 22 18.5 z M 40 26 L 40 34 L 46 34 L 46 26 L 40 26 z M 40 36 L 40 45.474609 C 43.49 44.235609 46 40.91 46 37 L 46 36 L 40 36 z" fill="#47ad01"></path>
                  </svg> */}
                  <AccountBoxIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
                Contact
              </li>
            </NavLink>
            <NavLink to="/consumers" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none">
                    <path d="M16 11c1.66 0 2.99 1.34 2.99 3L19 18H5v-4c0-1.66 1.34-3 3-3h8m0-2H8C5.79 9 4 10.79 4 13v7h16v-7c0-2.21-1.79-4-4-4z" fill="#47ad01" />
                  </svg> */}
                  <SupervisorAccountIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
              Consumers
              </li>
            </NavLink>
            <NavLink to="/resellers" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none">
                    <path d="M12 2a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#47ad01" />
                  </svg> */}
                  <StorefrontIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
              Resellers
              </li>
            </NavLink>
            <NavLink to="/orders" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-6h4v4h-4v-4z" fill="#47ad01" />
                  </svg> */}
                  <ShoppingCartIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
              Orders
              </li>
            </NavLink>
            <NavLink to="/admins" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-6 8v-2c0-2.67 5.33-4 6-4s6 1.33 6 4v2H6z" fill="#47ad01" />
                  </svg> */}
                  <AdminPanelSettingsIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
              Admins
              </li>
            </NavLink>
            <NavLink onClick={handleLogout} eventKey="link-event-key" className="sidebar-link logout">
              <li>
                <div className="icon1 d-flex align-items-center justify-content-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-6 8v-2c0-2.67 5.33-4 6-4s6 1.33 6 4v2H6z" fill="#47ad01" />
                  </svg> */}
                  <LogoutIcon style={{ fontSize: 25, color: "#47ad01" }} />
                </div>
              Logout
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* <button onClick={handleLogout}> Logout</button> */}
    </>
  );
}

export default Sidebar;
