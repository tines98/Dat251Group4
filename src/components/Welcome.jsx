import React from 'react';
import "./Welcome.css"
import {db} from "../firebase";
import { useState, useEffect } from "react";

function getItemList(setItemsList){
    const ref = db.collection("items");
    var stuff = [];
    ref.onSnapshot((snapshot) => {
        snapshot.forEach(doc => {
            stuff.push(doc.data());
        });
        setItemsList(stuff);
    });
}

const ItemListing = (props) => {
    return (
        <div className='ItemListing'>
            <a>Name:</a>
            <h3>{props.item.name}</h3>
            <a>City:</a>
            <h3>{props.item.city}</h3>
            <a>Owner:</a>
            <h3>{props.item.owner}</h3>
            <a>Price:</a>
            <h3>{props.item.price}</h3>
        </div>
    );
}

const ListItems = (props) => {
    return (
        <div className='ItemList'>
          {props.items.map(item => (
            <ItemListing item={item}></ItemListing>
          ))}
        </div>
    );
}

const Welcome = () => {
    const [itemsList, setItemsList] = useState([]);
    return (
        <div className="Welcome">
            <img src="https://res.cloudinary.com/simpleview/image/upload/v1504857098/clients/norway/hiking_litlefjellet_andalsnes_norway_2_1_9133c8d8-8524-4326-9c33-de8358fa370a.jpg" width="750"></img>
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

export default Welcome;