import React from 'react';
import "./Welcome.css"
import firebase from "firebase/compat";
//import {db} from "../firebase";

const Welcome = () => {
    return (
        <div className="Welcome">
            <h1>Welcome!</h1>
            <h2>Search for an item</h2>
            {/*TODO make onClick that sends a Get request to REST API*/}
            <button className={"GetSkisButton"} />
        </div>
    );
}

window.onload = function() {
    const getSkisButton = document.querySelector(".GetSkisButton");
    if (getSkisButton){
        getSkisButton.addEventListener("click", () =>{
            const getSkis = firebase.functions().httpsCallable("getSkis");
            console.log("clicked the button");
            getSkis().then((result,response) => {
                console.log(result.data);
            });
        });
    }
}

export default Welcome;