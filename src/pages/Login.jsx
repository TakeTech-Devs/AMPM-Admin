import React, { useEffect, useState } from 'react';
import '../styles/Login.scss';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin, clearErrors } from '../Actions/AdminAction';
// import logo from "../assets/company-logo.png";
import logo from "../assets/login-page-logo.png";
import Swal from "sweetalert2";


function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, loading, isAuthenticated } = useSelector((state) => state.adminLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(email, password));
    // window.location.href = '/'

    // setTimeout(() => {
    //   window.location.reload();
    // }, 250); // 1 second delay
  };

  useEffect(() =>{
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      }).then(() => {
        dispatch(clearErrors());
      });
    }
  }, [dispatch, error])



  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="login-key">
              {/* <i className="fa fa-key" aria-hidden="true"></i> */}
              <img src={logo} />
            </div>
            <div className="login-title">
              ADMIN PANEL
            </div>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label">EMAIL</label>
                  <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="loginbttm">
                  <div className="login-text"></div>
                  <div className="login-button">
                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
