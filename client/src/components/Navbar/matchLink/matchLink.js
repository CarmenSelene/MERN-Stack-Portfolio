import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function matchLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/match'}><strong>Match</strong></Link>
        </li>
    );
}

export default matchLink;