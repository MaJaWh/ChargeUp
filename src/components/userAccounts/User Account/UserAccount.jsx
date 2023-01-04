import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './UserAccount.css'
import useToken from '../../../customhooks/useToken'

function UserAccount() {

    const { setToken } = useToken()
    const navigate = useNavigate()

    const [newCar, setNewCar] = useState({
        make: "",
        model: "",
        plugtype: "",
        powerrating: "",
        maxdistance: "",
    })


    const [editForm, setEditForm] = useState({
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
                            value={editForm.name}
                            onChange={(e) => setEditForm({...editForm, name: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Email</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='email'
                            value={editForm.email}
                            onChange={(e) => setEditForm({...editForm,  email: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">New Password</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='password'
                            value={editForm.password}
                            onChange={(e) => setEditForm({...editForm, password: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Confirm Password</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='passwordConfirmation'
                            value={editForm.passwordConfirm}
                            onChange={(e) => setEditForm({...editForm,  passwordConfirm: e.target.value })}
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
                            value={newCar.make}
                            onChange={(e) => setNewCar({ model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Model</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='make'
                            value={newCar.model}
                            onChange={(e) => setNewCar({ model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Plug Type</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='plugtype'
                            value={newCar.plugtype}
                            onChange={(e) => setNewCar({ model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Power Rating</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='make'
                            value={newCar.powerrating}
                            onChange={(e) => setNewCar({ model: e.target.value })}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Max Distance</label>
                            <input 
                            type="text"
                            className='form-control'
                            id='make'
                            value={newCar.maxdistance}
                            onChange={(e) => setNewCar({ model: e.target.value })}
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