import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/shop';
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handlesignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from,{replace: true});
    }
    return (
        <div className='form-container'>
            <div >
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handlesignIn}>
                    <div className='input-group'>
                        <label htmlFor='emial'>Email</label>
                        <input onBlur={handleEmail} type='email' name='email' required></input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePassword} type='password' name='password'></input>
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>loading....</p>
                    }
                    <input className='submit-btn' type='submit' value='Login' />
                </form>
                <p>New to Ema-John? <Link to='/signup' className='form-link'>Create an Acount!!</Link></p>
                <div className='extra'>
                    <p>---------------------------</p>
                    <p>or</p>
                    <p>---------------------------</p>
                </div>
                <div >
                    <button className='btn-style'>
                        <div className='google'>
                            <span className='blue'>G</span>
                            <span className='red'>o</span>
                            <span className='orange'>o</span>
                            <span className='blue'>g</span>
                            <span className='green'>l</span>
                            <span className='red'>e </span>
                        </div>
                        <span className='btn-text'>Connect With Google</span>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Login;