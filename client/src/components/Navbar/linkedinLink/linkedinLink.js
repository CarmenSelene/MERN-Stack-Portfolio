import React from 'react';
import "../Navbar.css";

function linkedinLink() {
    return (
        <li className="nav-item menuLink">
            <a href="https://www.linkedin.com/in/saryn-caister-802a4630/" target="_blank" rel="noopener noreferrer">
                <img src={require('./linkedin_icon.png')} className="linkedinLink" alt="Linkedin" />
            </a>
        </li>
    );
}

export default linkedinLink;