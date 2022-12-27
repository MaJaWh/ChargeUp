import React from "react";
import PropTypes from "prop-types";
import "../styles/Login.css";

function Login() {
 
  return (
    <div className="login__outer">
      <div className="login__background-image">
        <div className="login-box">
          <form className="login__form">
            <div className="login__button-div">
              <h1>ChargeUp</h1>
            </div>
            <div className="login__input-box">
              <label className="login__input-field">
                <input
                  type="text"
                  className="login__input-user"
                  placeholder="UserName"
                  // onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label className="login__input-field">
                <input
                  type="password"
                  className="login__input-user"
                  placeholder="Password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="login__button-box">
              <button type="submit" className="login__button">
                Login
              </button>
              <button type="submit" className="login__button">
                Sign Up
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func,
};

export default Login;
