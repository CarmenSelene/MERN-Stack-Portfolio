import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function giphyLink() {
    return (
        <li className="nav-item p-3 m-2">        
            <Link className="projectsLink" to={'/giphy'}><strong className="text-primary">Giphy API</strong></Link>
        </li>
    );
}

export default giphyLink;