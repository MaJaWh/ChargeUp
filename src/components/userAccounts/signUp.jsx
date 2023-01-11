import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/signUp.css';
import useToken from '../../customhooks/useToken';

function CreateAccount() {
  const { setToken } = useToken();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const createUserHandler = async (event) => {
    event.preventDefault();
    console.log(form);

    const response = await fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(form),
    }).catch((error) => {
      alert('A network error has occured');
    });
    const userResponse = await response.json();
    if (userResponse.token) {
      setToken(userResponse.token);
      navigate('/dashboard');
    } else {
      alert('User not created');
    }
  };

  return (
    <div className="form-outer">
      <div className="form__background-image">
        <div className="form-box">
          <h3>Create New User</h3>
          <form onSubmit={createUserHandler} className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">New Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Confirm Password</label>
              <input
                type="text"
                className="form-control"
                id="passwordConfirmation"
                value={form.passwordConfirm}
                onChange={(e) =>
                  setForm({ ...form, passwordConfirm: e.target.value })
                }
              />
            </div>
            <div className="btn__outer-box">
              <div className="form-group">
                <input
                  type="submit"
                  value="Create"
                  className="btn btn-primary"
                />
              </div>
              <Link to="/" className="btn">
                Go Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
