import React, { useState } from 'react';
import PropTypes from 'prop-types'
import '../styles/Login.css'
import useToken from '../customhooks/useToken'
import { useNavigate } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'applicaion/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


function Login() {
    const { setToken } = useToken()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        if(token) {
            setToken(token);
            navigate('/')
        }
        

    }

    return(
        <div className='login__outer'>
         <div className='login__background-image'>
          <div className="login-box">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password"  onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
          </div>
         </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;