import React, { useEffect } from 'react'
import "./Register.css"
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from "../firebase"
import Welcome from "./Welcome";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
    Link
} from "react-router-dom";
const handleSubmit = (event) => {
    //Create new user
    const email = document.querySelector(".Email").value;
    const password = document.querySelector(".Password").value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then(() =>
        sendEmailVerification(auth.currentUser))
        .catch((err) => alert(err.message));
};

const Register = () => {
    let navigate = useNavigate();
    return (
        <div className="form">
            <form onSubmit={(event)=>{
                event.preventDefault();
                handleSubmit();
                navigate("/MyAccount");
                }}>
                
                <div className="input-container">
                    <label><b>Email</b> </label>
                    <input className="Email" type="text" name="uname" required/>

                </div>
                <div className="input-container">
                    <label><b>Password</b> </label>
                    <input className="Password" type="password" name="pass" required />
                </div>
                    <div className="button-container">
                        <input type="submit"/>
                </div>
            </form>
        </div>
        )

}

export default Register;