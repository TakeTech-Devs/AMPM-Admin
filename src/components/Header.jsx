import React from "react";
import { Nav, Form, Button } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import userIcon from "../assets/user.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="search d-flex align-items-center gap-2">
          {/* <div className="searching-wrap">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M42 42L33.3 33.3M38 22C38 30.8366 30.8366 38 22 38C13.1634 38 6 30.8366 6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22Z"
                    stroke="#1E1E1E"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
          <div className="wrap-noti">
            <Nav.Link eventKey="link-event-key">
              <div className="notification">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                >
                  <path
                    d="M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.89 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.36 2.86 9.5 2.18V1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5V2.18C3.63 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5Z"
                    fill="#2F80ED"
                  />
                </svg>
              </div>
              <div className="number">15</div>
            </Nav.Link>
          </div> */}
          <div className="profile">
            <div className="photo">
              <img src={userIcon} alt="Admin logo" />
            </div>
            <div className="details ">
              <h4>Admin</h4>
              <p>Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
