import  React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

function EditAccount() {

    const [ form, setForm ] = useState({
        name: "",
        email: "",
        user: [],
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:7002/user/${params.id.toString()}`);

            if(!response.ok) {
                const message = `An error has accurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if(!record) {
                window.alert(`User with id ${id} not found`)
                navigate("/");
                return;
            }

            setForm(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefautl();
        const editedUser = {
            name: form.name,
            email: form.email,
            password: form.password,
            carMake: form.carMake,
            carModel: form.carModel,
            range: form.range,
            connectorType: form.connectorType,
        };

        await fetch(`http://localhost:7002/update/${parms.id}`, {
            method: "POST",
            body: JSON.stringify(editedUser),
            headers: {
                'content-type': 'application/json'
            },
        });

        navigate("/")
    }

    return(
        <div className='form-outer'>
            <div className='form__background-image'>
                <div className='form-box'>

            <h3>Edit User details</h3>
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
                    <lable htmlFor="name">Connector Type</lable>
                    <input 
                    type="text"
                    className='form-control'
                    id='connectorType'
                    value={form.connectorType}
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
    )
}

export default EditAccount