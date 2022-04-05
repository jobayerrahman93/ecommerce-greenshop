import React from 'react';
import { NavLink } from 'react-router-dom';
import googleImg from '../../img/google.png';
import './Login.css';

const UserLogin = () => {
    return (
        <div className='user-login mt-5'>
            <div className="userLogin-content-box">
                <p className='login-title'>Enter your username and password to login.</p>
                <input type="text" placeholder='jobayer@gmail.com' />
                <input className='mt-2 ' type="password" name="" id="" placeholder='password' />
                <div className='forgetPass text-end'>
                    <NavLink to="">forget Password?</NavLink>
                </div>

                <button className='btn userLoginBtn'>Login</button>

                <div>
                    <p className='orLogin mt-3'>or login with</p>
                </div>


                <div className="loginWith">
                    <button type='button' className='btn loginWithBtn'> <img src={googleImg} alt="" /> Login with Google</button>
                    <button type='button' className='btn loginWithBtn'> <i class="fa-brands fa-facebook-f"></i> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;