import React from 'react';
import "./Welcome.css"
import {useState} from "react";
import {Link} from 'react-router-dom';

async function getPoll(id){
    var response = null;
    var requestOptions = {
        method: 'GET',
        contentType: 'application/json',
        mode: 'cors'
    };
    //TODO possibly unsafe string concat?
    var url = "http://localhost:8080/poll/"+id.toString();
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

    // console.log("hello jerry");
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


const Welcome = () => {
    const [pollID, setPollID] = useState(0);
    return (
        <div className="Welcome">
            <h1>Welcome!</h1>
            <h2>Search for an item</h2>
            <input form="text" onChange={(e) => setPollID(e.target.value)}/>
            {/*TODO make onClick that sends a Get request to REST API*/}
            <EnterButton pollID={pollID} />
        </div>
    );
}

export default Welcome;