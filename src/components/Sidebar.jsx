import React from "react";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import companyLogo from "../assets/company-logo.png";
import { NavLink } from "react-router-dom"; 

function Sidebar() {
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
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3L3 12H6V21H10V15H14V21H18V12H21L12 3Z"
                    fill="#47ad01"
                  />
                </svg>
              </div>
              <NavLink to="/" eventKey="link-event-key">Home</NavLink>
            </li>
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                  <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                  <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                  <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                </svg>
              </div>
              <NavLink to="/aboutus" eventKey="link-event-key">About Us</NavLink>
            </li>
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                  <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                  <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                  <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                </svg>
              </div>
              <NavLink to="/product" eventKey="link-event-key">Product</NavLink>
            </li>
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                  <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                  <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                  <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                </svg>
              </div>
              <NavLink to="/contact" eventKey="link-event-key">Contact</NavLink>
            </li>
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                  <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                  <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                  <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                </svg>
              </div>
              <NavLink to="/consumers" eventKey="link-event-key">Consumers</NavLink>
            </li>
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                  <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                  <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                  <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                </svg>
              </div>
              <NavLink to="/resellers" eventKey="link-event-key">Resellers</NavLink>
            </li>
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                  <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                  <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                  <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                </svg>
              </div>
              <NavLink to="/orders" eventKey="link-event-key">Orders</NavLink>
            </li>
            <li>
              <div className="icon1 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5C8 6.7 9.3 8 11 8C12.7 8 14 6.7 14 5C14 3.3 12.7 2 11 2C9.3 2 8 3.3 8 5Z" fill="#47ad01" />
                  <path d="M2 21V18C2 15.8 3.8 14 6 14H10C12.2 14 14 15.8 14 18V21H2Z" fill="#47ad01" />
                  <path d="M16 7C16 8.1 16.9 9 18 9C19.1 9 20 8.1 20 7C20 5.9 19.1 5 18 5C16.9 5 16 5.9 16 7Z" fill="#47ad01" />
                  <path d="M15 21H22V19C22 16.8 20.2 15 18 15H17C16.4 15 15.8 15.1 15.3 15.4C15.1 15.6 15 15.8 15 16V21Z" fill="#47ad01" />
                </svg>
              </div>
              <NavLink to="/admins" eventKey="link-event-key">Admins</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
