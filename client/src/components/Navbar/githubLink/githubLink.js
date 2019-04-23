import React from 'react';
import "../Navbar.css";

function githubLink() {
    return (
        <li className="nav-item menuLink">
            <a href="https://github.com/SarynSummer/" target="_blank" rel="noopener noreferrer">
                <img src={require('./github_icon.png')} className="socialIcon" alt="Github" />
            </a>
        </li>
    );
}

export default githubLink;