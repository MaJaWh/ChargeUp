import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/createAccount.css'

function CreateAccount() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
    

    const newPerson = { ...form };

    await fetch("http://localhost:7002/record/add", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newPerson),
    })
    .catch(error => {
        window.alert(error);
        return;
    });

    setForm({ name: "", email: "", password: "" });
    navigate("/")
};


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
                    onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="name">Email</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='email'
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="name">New Password</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='password'
                    value={form.password}
                    onChange={(e) => updateForm({ email: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="name">Confirm Password</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='passwordConfirmation'
                    value={form.passwordConfirmation}
                    onChange={(e) => updateForm({ email: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="name">Car Make</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='car-make'
                    value={form.carMake}
                    onChange={(e) => updateForm({ car: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="name">Car Model</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='car-model'
                    value={form.carModel}
                    onChange={(e) => updateForm({ car: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="name">Range</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='range'
                    value={form.range}
                    onChange={(e) => updateForm({ car: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="name">Plug Type</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='plugType'
                    value={form.plugType}
                    onChange={(e) => updateForm({ car: e.target.value })}
                    />
                </div>
                <div className="form-group">
                <input
                    type="submit"
                    value="Create"
                    className="btn btn-primary"
                    />
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;