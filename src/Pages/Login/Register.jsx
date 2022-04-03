import React from 'react';
import googleImg from '../../img/google.png';
import './Login.css';

const Register = () => {
    return (
        <>

            <div className="register-section mt-5">
                <div className="register-box">
                    <p className='login-title'>Enter your email and password to register.</p>

                    <input type="text" placeholder='username' />
                    <input className='mt-2 w-100' type="email" name="" id="" placeholder='enter your email' />
                    <input className='mt-2 ' type="password" name="" id="" placeholder='password' />
                    <input className='mt-2 ' type="password" name="" id="" placeholder='confirm password' />


                    <button className='btn userLoginBtn'>Register</button>

                    <div>
                        <p className='orLogin mt-3'>or login with</p>
                    </div>


                    <div className="loginWith">
                        <button type='button' className='btn loginWithBtn'> <img src={googleImg} alt="" /> Login with Google</button>
                        <button type='button' className='btn loginWithBtn'> <i class="fa-brands fa-facebook-f"></i> Login with Google</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Register;