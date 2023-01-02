import React, { useState } from 'react';
import './UserAccount.css'

function UserAccount() {

    const [newCar, setNewCar] = useState()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    return(
        <div className='user-account__outer'>
            <div className='user-account__image'>
            <div className='user-account__form-box'>
            <div>Edit User Details</div>             
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
                <button className='user-account__btn'>Edit account</button>
                <button className='user-account__btn'>Add Car</button>
            </div>
            <div className='user-account__add-car'>
                <div>Create a new Car</div>
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
                </form>
                <button className='user-account__btn'>Create New Car</button>
                <button className='user-account__btn'>Delete Car</button>
            </div>
            <div>
                <button className='user-account__btn'>Back to Dashboard</button>
            </div>
            </div>
        </div>
    )
}

export default UserAccount;