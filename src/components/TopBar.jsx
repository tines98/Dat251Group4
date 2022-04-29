import React from 'react';
import "./TopBar.css";
//import logo from '../logo.svg';
import Button from 'react-bootstrap/Button';
import {
    Link
} from 'react-router-dom';

const TopBarContainerLeft = () =>{
    return (
        <div className="TopBarContainerLeft">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1><Link to="/Welcome"> Rentivity</Link></h1>

        </div>
    );
}

const TopBarNavButton = (props) => {
    return (
        <Link to={props.linkTo}>
            <Button className="buttons">{props.buttonText}</Button>
        </Link>
    );
}

const TopBarContainerRight = () => {
    return (
        <div className="TopBarContainerRight">
            <TopBarNavButton linkTo="/Register" buttonText="Log in"/>
            <TopBarNavButton linkTo="/MyAccount" buttonText="My Account"/>
            <TopBarNavButton linkTo="/UploadImage" buttonText="Post"/>
        </div>
    );
}

const TopBar = () =>{
    return (
        <div className="TopBar">
            <TopBarContainerLeft />
            <TopBarContainerRight />
        </div>
    );
}

export default TopBar