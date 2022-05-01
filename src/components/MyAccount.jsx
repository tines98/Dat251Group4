import React from 'react';
import "./MyAccount.css";
// import firebase from 'firebase/compat';
import {getAuth} from "firebase/auth";



const auth = getAuth();
const user = auth.currentUser;

if(user !== null) {
    user.providerData.forEach((profile) => {
        console.log("   Email: " + profile.email);
    });
}
const MyAccount = () => {
    return (
        <div className="MyAccount">
            <h1>Your Page</h1>
            <p>Mail, name, etc</p>
        </div>
    );

}
export default MyAccount;