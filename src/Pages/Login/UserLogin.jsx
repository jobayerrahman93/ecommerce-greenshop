import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../firebase/hook/useAuth';
import googleImg from '../../img/google.png';
import './Login.css';
const UserLogin = () => {


    const { googleSignIn } = useAuth();

    const googleLogin = () => {


        googleSignIn();


    }

    const valueChange = (value) => {

        // console.log(value);
    }


    const location = useLocation();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        })
    }, [location]);


    return (
        <div className='user-login mt-5'>
            <div className="userLogin-content-box">
                <p className='login-title'>Enter your username and password to login.</p>
                <input onBlur={(e) => valueChange(e.target.value)} type="text" placeholder='jobayer@gmail.com' />
                <input className='mt-2 ' type="password" name="" id="" placeholder='password' />
                <div className='forgetPass text-end'>
                    <NavLink to="">forget Password?</NavLink>
                </div>

                <button className='btn userLoginBtn'>Login</button>

                <div>
                    <p className='orLogin mt-3'>or login with</p>
                </div>


                <div className="loginWith">
                    <button onClick={googleLogin} type='button' className='btn loginWithBtn'> <img src={googleImg} alt="" /> Login with Google</button>
                    <button type='button' className='btn loginWithBtn'> <i className="fa-brands fa-facebook-f"></i> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;