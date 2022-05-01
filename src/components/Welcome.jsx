import React from 'react';
import "./Welcome.css"
import {db, query, orderBy, doc, getDoc} from "../firebase";
import { useState, useEffect } from "react";

async function getItemList(setItemsList){
    const ref = db.collection("items");
    // const ref = query(ref2, orderBy("price"))
    var stuff = []; //im stuff
    ref.onSnapshot((snapshot) => {
        snapshot.forEach(doc => {
            stuff.push(doc.data());
        });
        stuff.sort(function (a, b) {
            return a.price - b.price;
        })
        setItemsList(stuff);
    });
}

function doFilter(item, keyword){
    if (keyword===""){
        return true
    }
    for (var key in item){
        if (item[key] === keyword){
            return true
        }
    }
    console.log("Nope")
    return false
}

const FilterField = (props) => {
    const [keyword, setKeyword] = useState("");
    return (
        <div>
            <input form="text" onChange={(e) => {setKeyword(e.target.value)}}>
            </input>
            <input type="button" onClick={() => props.setFilterKeyword(keyword)} value="Search"></input>
        </div>
    );
}

const ItemListing = (props) => {
    var image = "https://firebasestorage.googleapis.com/v0/b/rentivity-d61fc.appspot.com/o/images%2F" + props.item.image + "?alt=media&token=acf1dca6-bcea-4f4d-a2d9-7e7767a1f7d3";
    console.log(image);
    return (
        <div>
            <div>
            </div>
            <div className='ItemListing'>
            <img className="profile" width="80" height="80" alt="" src={image}/>
                <a>Name:</a>
                <h3>{props.item.name}</h3>
                <a>City:</a>
                <h3>{props.item.city}</h3>
                <a>Owner:</a>
                <h3>{props.item.owner}</h3>
                <a>Price:</a>
                <h3>{props.item.price}</h3>
            </div>
        </div>
    );
}

const ListItems = (props) => {
    return (
        <div className='ItemList'> {
            props.items.filter((item) => doFilter(item, props.filterKeyword)
            ).map((item) => (
                <ItemListing item={item}></ItemListing>
            ))
        }
        </div>
    );
}

const Welcome = () => {
    const [itemsList, setItemsList] = useState([]);
    const [filterKeyword, setFilterKeyword] = useState("");
    return (
        <div className="Welcome">
            {/* <img className='bigPicture' src="https://res.cloudinary.com/simpleview/image/upload/v1504857098/clients/norway/hiking_litlefjellet_andalsnes_norway_2_1_9133c8d8-8524-4326-9c33-de8358fa370a.jpg" width="750"></img> */}
            <h1>Welcome!</h1>
            <h2>Search for an item</h2>
            <button onClick={() => {getItemList(setItemsList);}}>
                Load Items
            </button>
            <FilterField setFilterKeyword={setFilterKeyword}></FilterField>
            <div>
                <ListItems items={itemsList} filterKeyword={filterKeyword}/>
            </div>

        </div>
    );
}

export default Welcome;