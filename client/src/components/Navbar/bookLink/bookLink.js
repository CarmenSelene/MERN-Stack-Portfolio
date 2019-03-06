import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function bookLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/books'}><strong>Books</strong></Link>
        </li>
    );
}

export default bookLink;