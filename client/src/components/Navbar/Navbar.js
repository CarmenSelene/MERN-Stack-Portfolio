import React from 'react';
import WhichPage from "./WhichPage/WhichPage";
import HomeLink from "./homeLink/homeLink";
import ProjectsLink from "./projectsLink/projectsLink";
import ContactLink from "./contactLink/contactLink";
import LinkedinLink from "./linkedinLink/linkedinLink";
import GithubLink from "./githubLink/githubLink";

function Navbar() {
    return (
        <header className="App-header">
            <ul className="nav App-navbar">
                <WhichPage />
                <div className="blockOfLinks">
                <HomeLink />
                <ProjectsLink />
                <ContactLink />
                </div>
                <div className="blockOfLinks">
                <LinkedinLink />
                <GithubLink />
                </div>
            </ul>
        </header>
    );
}

export default Navbar;