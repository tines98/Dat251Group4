import React from 'react';
import "./Welcome.css"
import firebase from "firebase/compat";

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

const getSkisButton = document.querySelector(".GetSkisButton");
getSkisButton.addEventListener("click", () =>{
    const getSkis = firebase.functions().httpsCallable("getSkis");
    getSkis().then((result) => {
        console.log(result.data);
    });
})

export default Welcome;