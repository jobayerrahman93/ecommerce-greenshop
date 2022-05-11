import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Login.css';
import UserLogin from './UserLogin';

const Login = () => {

    const location = useLocation();





    return (
        <>
            <div className="login-section">
                <div className="container">
                    <div className="login-content">
                        <NavLink style={({ isActive }) => { return { color: isActive || location.pathname == '/login' ? '#46a358' : '' } }} to="/login/userLogin">
                            Login
                        </NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? '#46a358' : '' } }} className="registerTab" to="/login/register">
                            Register
                        </NavLink>

                        {
                            location.pathname == '/login' ? <UserLogin></UserLogin> : <Outlet></Outlet>
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;