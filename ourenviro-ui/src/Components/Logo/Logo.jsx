import * as React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import logo from './logo.png'


export default function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo: earth in green colors" />
            </Link>
        </div>
    );

}
