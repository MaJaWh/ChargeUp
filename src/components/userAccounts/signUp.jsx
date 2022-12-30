import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/signUp.css'

function CreateAccount() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        newPassword: "",
        passwordConfirm: "",
    });
    const newUser = {};


    async function onSubmit(e) {
        e.preventDefault();
            await fetch("http://localhost:5000/user/add", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            }   ,
        body: JSON.stringify(newUser),
    })
    .catch(error => {
        window.alert(error);
        return;
    });

    setForm({ 
    name: "",
    email: "",
    newPassword: "",
    passwordConfirm: "",
    
});
    }

    return(
        <div className='form-outer'>
            <div className='form__background-image'>
                <div className='form-box'>
                    <h3>Create New User</h3>
                    <form onSubmit={onSubmit} className='form'>
                        <div className='form-group'>
                            <lable htmlFor="name">Name</lable>
                            <input 
                            type="text"
                            className='form-control'
                            id='name'
                            value={form.name}
                            onChange={(e) => setForm({ name: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <lable htmlFor="name">Email</lable>
                            <input 
                            type="text"
                            className='form-control'
                            id='email'
                            value={form.email}
                            onChange={(e) => setForm({ email: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <lable htmlFor="name">New Password</lable>
                            <input 
                            type="text"
                            className='form-control'
                            id='password'
                            value={form.password}
                            onChange={(e) => setForm({ password: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <lable htmlFor="name">Confirm Password</lable>
                            <input 
                            type="text"
                            className='form-control'
                            id='passwordConfirmation'
                            value={form.passwordConfirm}
                            onChange={(e) => setForm({ passwordConfirm: e.target.value })}
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
                            <Link to="/landingPage" className="btn">Go Back</Link>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    )
}


export default CreateAccount;