import React, { useState } from "react";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import companyLogo from "../assets/company-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Actions/AdminAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import TocIcon from '@mui/icons-material/Toc';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ReviewsIcon from '@mui/icons-material/Reviews';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


function Sidebar() {
  const [showContentMenu, setShowContentMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.alert("Logged Out Successfully");
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink to="/">
          <img src={companyLogo} alt="Company Logo" />
        </NavLink>
      </div>
      <div className="menu">
        <ul>
          {/* Content Management Dropdown */}
          <li
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"}
            onClick={() => setShowContentMenu(!showContentMenu)}
            style={{ cursor: "pointer", backgroundColor: "#fff", width: "90%", height: "40px", borderRadius: "5px", paddingLeft: "20px", paddingBlock: "22px" }}
          >
            <div className="d-flex align-items-center">
              <TocIcon style={{ fontSize: 25, color: "#47ad01" }} />
              <span style={{paddingLeft:"10px"}}>Content Management</span>
              {showContentMenu ? (
                <ExpandLessIcon style={{ marginLeft: "auto" }} />
              ) : (
                <ExpandMoreIcon style={{ marginLeft: "auto" }} />
              )}
            </div>
          </li>
          {showContentMenu && (
            <ul className="submenu">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <li className="d-flex align-items-center">
                  <div className="icon1">
                    <HomeIcon style={{ fontSize: 25, color: "#47ad01" }} />
                  </div>
                  Home
                </li>
              </NavLink>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <li className="d-flex align-items-center">
                  <div className="icon1">
                    <InfoIcon style={{ fontSize: 25, color: "#47ad01" }} />
                  </div>
                  About Us
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <li className="d-flex align-items-center">
                  <div className="icon1">
                    <AccountBoxIcon style={{ fontSize: 25, color: "#47ad01" }} />
                  </div>
                  Contact
                </li>
              </NavLink>
              <NavLink
                to="/discount"
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <li className="d-flex align-items-center">
                  <div className="icon1">
                    <LocalOfferIcon style={{ fontSize: 25, color: "#47ad01" }} />
                  </div>
                  Discount
                </li>
              </NavLink>
              

              <NavLink
                to="/subscribers"
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <li className="d-flex align-items-center">
                  <div className="icon1">
                    <MarkEmailReadIcon style={{ fontSize: 25, color: "#47ad01" }} />
                  </div>
                  Subscribers
                </li>
              </NavLink>

              <NavLink
                to="/testimonial"
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <li className="d-flex align-items-center">
                  <div className="icon1">
                    <ReviewsIcon style={{ fontSize: 25, color: "#47ad01" }} />
                  </div>
                  Testimonial
                </li>
              </NavLink>
            </ul>
          )}
          {/* Other Links */}
          <NavLink
            to="/queries"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <li className="d-flex align-items-center">
              <div className="icon1">
                <QuestionAnswerIcon
                  style={{ fontSize: 25, color: "#47ad01" }}
                />
              </div>
              Queries
            </li>
          </NavLink>
          <NavLink
            to="/consumers"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <li className="d-flex align-items-center">
              <div className="icon1">
                <SupervisorAccountIcon
                  style={{ fontSize: 25, color: "#47ad01" }}
                />
              </div>
              Consumers
            </li>
          </NavLink>
          <NavLink
            to="/resellers"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <li className="d-flex align-items-center">
              <div className="icon1">
                <StorefrontIcon style={{ fontSize: 25, color: "#47ad01" }} />
              </div>
              Resellers
            </li>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <li className="d-flex align-items-center">
              <div className="icon1">
                <ShoppingCartIcon style={{ fontSize: 25, color: "#47ad01" }} />
              </div>
              Orders
            </li>
          </NavLink>
          <NavLink
            to="/admins"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <li className="d-flex align-items-center">
              <div className="icon1">
                <AdminPanelSettingsIcon
                  style={{ fontSize: 25, color: "#47ad01" }}
                />
              </div>
              Admins
            </li>
          </NavLink>
          <NavLink
            onClick={handleLogout}
            eventKey="link-event-key"
            className="sidebar-link logout"
          >
            <li className="d-flex align-items-center">
              <div className="icon1">
                <LogoutIcon style={{ fontSize: 25, color: "#47ad01" }} />
              </div>
              Logout
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
