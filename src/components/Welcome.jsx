import React from 'react';
import "./Welcome.css"
import firebase from "firebase/compat";
//import {db} from "../firebase";

const Welcome = () => {
    return (
        <div className="Welcome">
            <img src="https://res.cloudinary.com/simpleview/image/upload/v1504857098/clients/norway/hiking_litlefjellet_andalsnes_norway_2_1_9133c8d8-8524-4326-9c33-de8358fa370a.jpg" width="750"></img>
            <h1>Welcome!</h1>
            <h2>Search for an item</h2>
            {/*TODO make onClick that sends a Get request to REST API*/}
            <button className={"GetSkisButton"}
             >Type item: for example skis</button>
    
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