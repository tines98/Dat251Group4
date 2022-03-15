import React from 'react';
import "./Welcome.css"
import {useState} from "react";
import {Link} from 'react-router-dom';
import { db } from "../firebase.js";
import { ref, onValue, get, child } from "firebase/database";

const getSkis = (id) => {
    const dbRef = ref(db);
    get(child(dbRef, "/Items/")).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });

    //return result;
};

async function getPoll(id){
    var response = null;
    var requestOptions = {
        method: 'GET',
        contentType: 'application/json',
        mode: 'cors'
    };
    //TODO possibly unsafe string concat?
    var url = "http://localhost:3000/"+id.toString();
    await fetch(url, requestOptions)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            response = data;
            console.log(data);
        })
        .catch(err => {
            throw err
        });

    console.log(response);
    return response;
}

const EnterButton = (props) => {
    const [pollID, setPollID] = useState(null);
    const [response, setResponse] = useState(null);
    return (
        <Link to={"/poll/"+props.pollID}>
            <button onClick={() =>
                {
                    const responseJson = getPoll(props.pollID);
                    setResponse(responseJson);
                    setPollID(responseJson.id);
                }
            }>
                Enter
            </button>
        </Link>
    );
}

const SkiButton = (props) => {
    const [itemID, setItemID] = useState(null);
    const [response, setResponse] = useState("AAA");
    return (
        <div>
            <h1>{response}</h1>
            <button onClick={() =>
                {
                    const res = getSkis(props.itemID);
                    console.log(res);
                    setResponse(res);
                }
            }>
                GET SKIS?!?!?!?!
            </button>
        </div>
    );
}



const Welcome = () => {
    const [pollID, setPollID] = useState(0);
    return (
        <div className="Welcome">
            <h1>Welcome!</h1>
            <h2>Search for an item</h2>
            <input form="text" onChange={(e) => setPollID(e.target.value)}/>
            {/*TODO make onClick that sends a Get request to REST API*/}
            <EnterButton pollID={pollID} />
            <SkiButton itemID={1} />
        </div>
    );
}

export default Welcome;