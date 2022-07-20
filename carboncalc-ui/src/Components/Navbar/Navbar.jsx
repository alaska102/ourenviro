import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import {Link as LinkScroll} from 'react-scroll';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Logo />  
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/map" className="nav-link">Map</Link>
        <Link to="/vehicles" className="nav-link">Vehicles</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>


      </div>
    </nav>
  );
}