//Ola Comment
import React from "react";
import './App.css';
import TopBar from './components/TopBar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Welcome from "./components/Welcome";

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
                        </Routes>


                </div>
            </div>
        </Router>
    );
}

export default App;
