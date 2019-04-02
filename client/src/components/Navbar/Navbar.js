import React from 'react';
import HomeLink from "./homeLink/homeLink";
import Giphylink from "./giphyLink/giphyLink";
import MatchLink from "./matchLink/matchLink";
import BookLink from "./bookLink/bookLink";
import ContactLink from "./contactLink/contactLink";
import LinkedinLink from "./linkedinLink/linkedinLink";
import GithubLink from "./githubLink/githubLink";

function Navbar() {
    return (
        <ul className="nav App-navbar">
            <HomeLink />
            <Giphylink />
            <BookLink />
            <MatchLink />
            <ContactLink />
            <LinkedinLink />
            <GithubLink />
        </ul>
    );
}

export default Navbar;