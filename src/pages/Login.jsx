import React from 'react';
import '../styles/Login.scss'; 

function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="login-title">
              ADMIN PANEL
            </div>
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">EMAIL</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" />
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
