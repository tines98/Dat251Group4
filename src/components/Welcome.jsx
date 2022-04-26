import React from 'react';
import "./Welcome.css"
import firebase from "firebase/compat";
import {db} from "../firebase";
import { useState, useEffect } from "react";

function getItemList(setItemsList){
    const ref = db.collection("items");
    var stuff = [];
    ref.onSnapshot((snapshot) => {
        snapshot.forEach(doc => {
            //stuff.push({...doc.data(), id: doc.id});
            // stuff.push(JSON.stringify(doc.data()));
            stuff.push(doc.data());
        });
        setItemsList(stuff);
    });
}

const ItemListing = (props) => {
    return (
        <div className='ItemListing'>
            <a>Name:</a>
            <a>{props.item.name}</a>
            <a>Price:</a>
            <a>{props.item.price}</a>
        </div>
    );
}

const ListItems = (props) => {
    return (
        <>
          {props.items.map(item => (
            <ItemListing item={item}></ItemListing>
          ))}
        </>
    );
}

const Welcome = () => {
    const [itemsList, setItemsList] = useState([]);
    return (
        <div className="Welcome">
            <h1>Welcome!</h1>
            <h2>Search for an item</h2>
            <button onClick={() => {
                getItemList(setItemsList);
                }}>
                Load Items
            </button>
            <div>
                <ListItems items={itemsList}/>
            </div>

        </div>
    );
}

/**
 * This is an example of what a
 */
window.onload = function() {
    const getSkisButton = document.querySelector(".GetSkisButton");
    if (getSkisButton){
        getSkisButton.addEventListener("click", () =>{
            const getSkis = firebase.functions().httpsCallable("getSkis");
            console.log("clicked the button");
            getSkis().then((result) => {
                console.log(result.data);
            });
        });
    }
}

export default Welcome;