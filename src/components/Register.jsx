import React from 'react'
import "./Register.css"
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from "../firebase"


const handleSubmit = (event) => {
    //Create new user
    const email = document.querySelector(".Email").value;
    const password = document.querySelector(".Password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(() =>
        sendEmailVerification(auth.currentUser))
        .catch((err) => alert(err.message))

    // Prevent page reload
    event.preventDefault();
  };

const Register = () => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input className="Email" type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input className="Password" type="password" name="pass" required />
                </div>
                    <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )

}

export default Register;