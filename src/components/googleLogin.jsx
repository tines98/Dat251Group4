import React from 'react';
import "./googleLogin.css";
import googleLogo from '../googleLogo.png'
import {
    Link
} from 'react-router-dom';

const GoogleLoginButton = () => {
    return (
        <button className="GoogleLoginButton">
            <img src={googleLogo} className="GoogleLogoImg"></img>
            LOGIN
        </button>
    );
}

const GoogleLogin = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>Please login with Google</h2>
            <Link to="/welcome">
                <GoogleLoginButton />
            </Link>
        </div>
    );
}

export default GoogleLogin;