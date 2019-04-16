import React from 'react';
import HomeLink from "./homeLink/homeLink";
import ProjectsLink from "./projectsLink/projectsLink";
import ContactLink from "./contactLink/contactLink";
import LinkedinLink from "./linkedinLink/linkedinLink";
import GithubLink from "./githubLink/githubLink";

function Navbar() {
    return (
        <ul className="nav App-navbar">
            <HomeLink />
            <ProjectsLink />
            <ContactLink />
            <LinkedinLink />
            <GithubLink />
        </ul>
    );
}

export default Navbar;