import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function projectsLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/projects'}><strong>Projects</strong></Link>
        </li>
    );
}

export default projectsLink;