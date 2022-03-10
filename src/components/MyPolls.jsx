import React, {useEffect, useState} from 'react';
import "./MyPolls.css";

async function getPolls(userID){
    console.log("GETTING POLL FROM USER" + userID);
    var requestOptions = {
        method: 'GET',
        contentType: 'application/json',
        mode: 'cors'
    };
    //TODO possibly unsafe string concat?
    var url = "http://localhost:8080/user/"+userID.toString()+"/polls";
    return await fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {throw err});
}

const PollListing = (props) => {
    return (
        <div className="PollListing">
            <h1>{props.id}</h1>
            <h1>{props.question}</h1>
        </div>
    );
}

const MyPolls = (props) => {
    const [polls, setPolls] = useState(null);
    useEffect(async () => {
        const tmp = await getPolls(props.userID);
        setPolls(tmp);
        console.log(tmp);
    },[]);
    return (
        <div className="MyPolls">
            <h1 className="MyPollsTitleText">My Polls</h1>
            <div className="PollListingContainer">
                {polls?.map((poll) => PollListing(poll))}
            </div>
        </div>
    );
}


export default MyPolls;