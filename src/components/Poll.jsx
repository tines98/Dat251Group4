import React from 'react';
import "./Poll.css"
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

async function getPoll(id){
    console.log("GETTING POLL " + id)
    var requestOptions = {
        method: 'GET',
        contentType: 'application/json',
        mode: 'cors'
    };
    //TODO possibly unsafe string concat?
    var url = "http://localhost:8899/poll/"+id.toString();
    return await fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {throw err});
}

async function postAnswer(id,option){
    console.log("ANSWERING POLL "+id+" with answer option "+option)
    var body = JSON.stringify({
        answer: option
    });
    var requestOptions = {
        method: 'POST',
        contentType: 'application/json',
        body: body
    };
    //TODO possibly unsafe string concat?
    var url = "http://localhost:8899/answer";
    return await fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {throw err});
}

const Question = (props) => {
    return (
        <div className="PollQuestionContainer">
            <h1 className="PollQuestionText">
                {props.question}
            </h1>
        </div>
    );
}

const ButtonContainer = (props) => {
    return (
        <div className="ButtonContainer">
            <button
                className="VoteButtonYes"
                onClick={() => postAnswer(props.pollID,props.option1)}
            >
                <h1>{props.option1}</h1>
            </button>
            <button
                className="VoteButtonNo"
                onClick={() => postAnswer(props.pollID,props.option2)}
            >
                <h1>{props.option2}</h1>
            </button>
        </div>
    );
}

const Poll = () => {
    let { id } = useParams();
    const [response, setResponse] = useState(null);
    useEffect(async () => {
        setResponse( await getPoll(id));
    },[]);

    return (
        <div className="PollContainer">
            <Question question={response?.question}/>
            <ButtonContainer option1={response?.option1} option2={response?.option2}/>
        </div>
    );
}


export default Poll;