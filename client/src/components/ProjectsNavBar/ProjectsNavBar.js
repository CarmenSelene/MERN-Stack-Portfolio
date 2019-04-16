import React from 'react';
import "./ProjectsNavBar.css";

function ProjectsNavBar(props) {
    return (
        <div class="d-flex bg-light text-dark">
            <div class="p-2 m-auto">
                <h4 className="projectsLink p-2">Choose A Project</h4>
                <ul className="nav projectsMenuBar">
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewBooksBrief()}>Database Management</button></li>
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewGiphyBrief()}>Giphy API/Axios</button></li>
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewMatchBrief()}>Javascript Match Game</button></li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectsNavBar;