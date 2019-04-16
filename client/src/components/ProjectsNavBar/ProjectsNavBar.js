import React from 'react';
import Giphylink from "../Navbar/giphyLink/giphyLink";
import MatchLink from "../Navbar/matchLink/matchLink";
import BookLink from "../Navbar/bookLink/bookLink";
import "./ProjectsNavBar.css";

function ProjectsNavBar() {
    return (
        <div class="d-flex bg-light text-dark">
            <div class="p-2 m-auto">
                <h3 className="projectsLink p-2">Choose A Project</h3>
                <ul className="nav projectsMenuBar">
                    <Giphylink />
                    <BookLink />
                    <MatchLink />
                </ul>
            </div>
        </div>
    );
}

export default ProjectsNavBar;