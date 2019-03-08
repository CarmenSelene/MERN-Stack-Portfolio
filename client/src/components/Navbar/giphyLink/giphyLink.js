import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function giphyLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/giphy'}><strong>Giphy</strong></Link>
        </li>
    );
}

export default giphyLink;