import React from 'react';
import HomeLink from "./homeLink/homeLink";
import Giphylink from "./giphyLink/giphyLink";
import MatchLink from "./matchLink/matchLink";
import BookLink from "./bookLink/bookLink";
import ContactLink from "./contactLink/contactLink";

function Navbar() {
    return (
        <ul className="nav App-navbar">
            <HomeLink />
            <Giphylink />
            <BookLink />
            <MatchLink />
            <ContactLink />
        </ul>
    );
}

export default Navbar;