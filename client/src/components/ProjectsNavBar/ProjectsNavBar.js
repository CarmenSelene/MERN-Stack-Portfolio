import React from 'react';
import "./ProjectsNavBar.css";

function ProjectsNavBar(props) {
    return (
        <div className="d-flex bg-light text-dark">
            <div className="p-2 m-auto">
                <strong className="projectsLink p-2">Choose A Project</strong>
                <ul className="nav projectsMenuBar">
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewBooksBrief()}>Database Management<br /><small className="text-primary">Google Books API</small></button></li>
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewGiphyBrief()}>Axios Search<br /><small className="text-primary">Giphy API</small></button></li>
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewMatchBrief()}>Click Match Game<br /><small className="text-primary">Javascript + JSON</small></button></li>
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewTransferBrief()}>Transfer App<br /><small className="text-primary">Community Marketplace</small></button></li>
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewETASBrief()}>E.T.A.S.<br /><small className="text-primary">*Hackathon Finalist*</small></button></li>
                    <li><button type="button" className="btn btn-dark m-2 p-3" onClick={() => props.viewFoodBrief()}>Food Buddy<br /><small className="text-primary">*Hackathon Winner*</small></button></li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectsNavBar;