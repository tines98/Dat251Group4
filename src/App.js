//Ola Comment
import React from "react";
import './App.css';
import TopBar from './components/TopBar';
import {
    BrowserRouter as Router,
    Routes,
    Route
    //Link
} from "react-router-dom";

import Welcome from "./components/Welcome";
import Register from "./components/Register";
import UploadImage from "./components/UploadImage";
import DisplayImage from "./components/DisplayImage";
import MyAccount from "./components/MyAccount";

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

                        <Route path="/register" element={<Register/>} />

                        <Route path="/uploadImage" element={<UploadImage/>} />

                        <Route path="/DisplayImage" element={<DisplayImage/>} />

                        <Route path="/MyAccount" element={<MyAccount/>} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
