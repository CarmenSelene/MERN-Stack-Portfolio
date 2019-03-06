import React from 'react';
import HomeLink from "./homeLink/homeLink";
import AboutLink from "./aboutLink/aboutLink";
import MatchLink from "./matchLink/matchLink";
import BookLink from "./bookLink/bookLink";
import ContactLink from "./contactLink/contactLink";
import "./Navbar.css";

function Navbar() {
    return (
        <ul className="nav App-navbar">
            <HomeLink />
            <AboutLink />
            <BookLink />
            <MatchLink />
            <ContactLink />
        </ul>
    );
}

export default Navbar;