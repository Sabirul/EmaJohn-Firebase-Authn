import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPass = event =>{
        setConfirmPassword(event.target.value);
    }
    const createUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Password Doesn't match");
            return;
        }
        if(password.length < 6){
            setError('password must contain at least 6 character!!.')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/login');
    }
    return (
        <div className='form-container'>
            <div >
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={createUser}>
                <div className='input-group'>
                    <label htmlFor='emial'>Email</label>
                    <input onBlur={handleEmail} type='email' name='email'></input>
                </div>

                <div className='input-group'>
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePassword} type='password' name='password' required></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='Confirm-password'>Confirm Password</label>
                    <input onBlur={handleConfirmPass} type='password' name='Confirm-password' required></input>
                </div>
                <p style={{color: 'red'}}> {error}</p>
                <input className='submit-btn' type='submit' value='Login'/>
                </form>
                <p>Already have account? <Link to='/login' className='form-link'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;