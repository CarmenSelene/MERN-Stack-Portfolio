import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function bookLink() {
    return (
        <li className="nav-item p-3 m-2">
        <Link className="projectsLink" to={'/books'}><strong className="text-primary">Database Management</strong></Link>
        </li>
    );
}

export default bookLink;