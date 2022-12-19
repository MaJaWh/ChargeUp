import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Login.css";
import useToken from "../customhooks/useToken";
import { useNavigate, Link } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "applicaion/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login() {
  const { setToken } = useToken();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token) {
      setToken(token);
      navigate("/");
    }
  };

  return (
    <div className="login__outer">
      <div className="login__background-image">
        <div className="login-box">
          <form onSubmit={handleSubmit} className="login__form">
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
            </div>
              <div className="login__container">
              <button type="submit" className="login__button">
                Enter
              </button>
                <Link to="/CreateAccount" className="login__create-button">CreateAccount</Link>
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
