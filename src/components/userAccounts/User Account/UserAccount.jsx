import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './UserAccount.css'

function UserAccount() {

    const [newCar, setNewCar] = useState()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const dashboardHandler= (event) => {
        event.preventDefault()
        navigate('/dashboard')
    }

    return(
        <div className='user-account__outer'>
            <div className='user-account__image'>
            <div className='user-account__form-box'>
            <h3>Edit User Details</h3>             
             <form className='form'>
                    <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='name'
                            value={form.name}
                            onChange={(e) => setForm({...form, name: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Email</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='email'
                            value={form.email}
                            onChange={(e) => setForm({...form,  email: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">New Password</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='password'
                            value={form.password}
                            onChange={(e) => setForm({...form, password: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Confirm Password</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='passwordConfirmation'
                            value={form.passwordConfirm}
                            onChange={(e) => setForm({...form,  passwordConfirm: e.target.value })}
                            />
                        </div>
                    </form>
                    <div className='user-account__btn__outer-box'>
                        <button className='user-account__btn'>Edit Account</button>
                        <button className='user-account__btn'>Delete Account</button>
                    </div>
            </div>
            <div className='user-account__form-box'>
                <h3>Create a new Car</h3>
                <form className='form'>
                    <div className='form-group'>
                        <label htmlFor="mycars">Your Cars</label>
                            <select 
                            type="text"
                            className='form-control'
                            id='mycars'
                            >
                                <option>Car 1</option>
                                <option>Car 2</option>
                                <option>Car 3</option>
                                <option>Car 4</option>
                            </select>
                    </div>
                </form>
                <form className='form'>
                    <div className='form-group'>
                        <label htmlFor="name">Make</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='make'
                            value={form.make}
                            onChange={(e) => setNewCar({...form,  model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Model</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='make'
                            value={form.model}
                            onChange={(e) => setNewCar({...form,  model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Plug Type</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='plugtype'
                            value={form.plugtype}
                            onChange={(e) => setNewCar({...form,  model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Power Rating</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='make'
                            value={form.powerrating}
                            onChange={(e) => setNewCar({...form,  model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Max Distance</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='make'
                            value={form.maxdistance}
                            onChange={(e) => setNewCar({...form,  model: e.target.value })}
                            />
                    </div>
                </form>
                <div className='user-account__btn__outer-box'>
                    <button className='user-account__btn'>Create New Car</button>
                    <button className='user-account__btn'>Delete Car</button>       
                    <button className='user-account__btn'>Edit Car</button>     
                </div>
            </div>
            <div className='user-account__back-btn__outer-box'>
                <button onClick={dashboardHandler}className='user-account__btn'>Back to Dashboard</button>
            </div>
            </div>
        </div>
    )
}

export default UserAccount;