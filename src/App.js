import React from "react";
import './App.css';
import GoogleLogin from './components/googleLogin';
import TopBar from './components/TopBar';
import Poll from "./components/Poll";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import CreatePoll from "./components/CreatePoll";
import Welcome from "./components/Welcome";
import MyPolls from "./components/MyPolls";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <TopBar />
                </header>
                <div className="App-body">
                        <Routes>
                            <Route path="/" element={<Welcome />} />

                            <Route path="/welcome" element={<Welcome/>} />

                            <Route path="/poll/:id" element={<Poll/>} />

                            <Route path="/polls" element={<MyPolls userID={1}/>} />

                            <Route path="/login" element={<GoogleLogin/>} />

                            <Route path="/create" element={<CreatePoll userID={1}/>} />
                        </Routes>


                </div>
            </div>
        </Router>
    );
}

export default App;
