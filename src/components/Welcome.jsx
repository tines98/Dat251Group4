import React from 'react';
import "./Welcome.css"
import {useState} from "react";
import { db } from "../firebase.js";
import { ref, get, child } from "firebase/database";

async function getSkis(id){
    const dbRef = ref(db);
    return await get(dbRef);
};

const SkiButton = (props) => {
    const [response, setResponse] = useState("Tiss");
    return (
        <div>
            <h1>{response}</h1>
            <button onClick={() =>
                {
                    setResponse(async () => await getSkis(props.itemID));
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
            <SkiButton itemID={1} />
        </div>
    );
}

export default Welcome;