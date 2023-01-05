import React, { useState } from "react";
import { Link, useNavigate} from 'react-router-dom'
import PropTypes from "prop-types";
import "../styles/LandingPage.css";
import useToken from '../customhooks/useToken'

function LandingPage() {

  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()
  const { setToken } = useToken()
  const navigate = useNavigate()

  const submitHandler = async (event) => {
    event.preventDefault()

    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        email,
        password,
      })
    }).catch((error) => {
      alert('A network error has occured')
  })
    const userLogin = await response.json()
    console.log(userLogin)
    if(userLogin.token) {
      setToken(userLogin.token)
      navigate('/dashboard')
    } else {
      alert('Please enter the correct password/email')
    }
  } 



 
  return (
    <div className="login__outer">
      <div className="login__background-image">
        <div className="login-box">
          <form className="login__form" onSubmit={submitHandler}>
            <div className="login__button-div">
              <h1>ChargeUp</h1>
            </div>
            <div className="login__input-box">
              <label className="login__input-field">
                <input
                  type="text"
                  className="login__input-user"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
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
