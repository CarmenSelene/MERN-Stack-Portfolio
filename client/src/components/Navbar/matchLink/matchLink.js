import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function matchLink() {
    return (
        <li className="nav-item p-3 m-2">
            <Link className="projectsLink" to={'/match'}><strong className="text-primary">Javascript Match-Game</strong></Link>
        </li>
    );
}

export default matchLink;