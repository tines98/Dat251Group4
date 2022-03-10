import React from 'react';
import {useState} from "react";
import "./CreatePoll.css";

async function createPollPostRequest(id,q,a1,a2){
    var raw = JSON.stringify({
        "question": q,
        "option1": a1,
        "option2": a2
    });

    var requestOptions = {
        method: 'POST',
        contentType: 'application/json',
        body: raw,
    };
    var url = "http://localhost:8899/poll";
    return await fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {throw err});
}

const CreatePoll = (props) =>{
    const [question, setQuestion] = useState("NO QUESTION?");
    const [answer1, setAnswer1] = useState("Yes");
    const [answer2, setAnswer2] = useState("No");
    return (
        <div className="CreatePollContainer">
            <h1 className="CreateAPollTitleText">Create a poll</h1>
            <div className="EnterQuestionContainer">
                <form className="PollForm" onSubmit={async (e) => createPollPostRequest(props.userID,question,answer1,answer2)}>
                    <label for={"pollQ"}>Question</label>
                    <input
                        type="text"
                        id="pollQ"
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <label for={"pollA1"}>Answer 1</label>
                    <input
                        type="text"
                        id="pollA1"
                        onChange={(e) => setAnswer1(e.target.value)}
                    />
                    <label for={"pollA2"}>Answer 2</label>
                    <input
                        type="text"
                        id="pollA2"
                        onChange={(e) => setAnswer2(e.target.value)}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </div>
            {/*TODO onClick, connect to database with a post request*/}
        </div>
    );
}

export default CreatePoll;