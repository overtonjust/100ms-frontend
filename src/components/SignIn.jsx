import React, { useState } from 'react';
import { useHMSActions } from '@100mslive/react-sdk';

const SignIn = () => {

    const hmsActions = useHMSActions();
    const [inputValues, setInputValues] = useState({
        name: '',
        token: ''
    });

    const handleInputChange = (e) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [e.target.name] : e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        hmsActions.join({
            userName: inputValues.name,
            authToken: inputValues.token
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='meeting-title'>Join Meeting</h2>
            <div className='input-container'>
                <input 
                required
                value={inputValues.name}
                onChange={handleInputChange}
                id='name'
                name='name'
                type="text"
                placeholder='Your name' 
                />
            </div>
            <div className='input-container'>
                <input 
                required
                value={inputValues.token}
                onChange={handleInputChange}
                id='token'
                name='token'
                type="text"
                placeholder='Auth token' 
                />
            </div>
            <button className='btn-signin'>Join</button>
        </form>
    );
};

export default SignIn;