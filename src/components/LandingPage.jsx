import React, { useState } from "react";
import { Link} from 'react-router-dom'
import PropTypes from "prop-types";
import "../styles/LandingPage.css";

function LandingPage() {

  const [ username, setUsername ] = useState()
  const [ password, setPassword ] = useState()
 
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
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label className="login__input-field">
                <input
                  type="password"
                  className="login__input-user"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="login__button-box">
              <button type="submit" className="login__button">
                Login
              </button>
              <Link to="/signUp" className="login__button">
                Sign Up
              </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  setToken: PropTypes.func,
};

export default LandingPage;
