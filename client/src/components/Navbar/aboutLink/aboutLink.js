import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function aboutLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/about'}><strong>About</strong></Link>
        </li>
    );
}

export default aboutLink;