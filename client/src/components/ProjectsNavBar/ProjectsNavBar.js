import React from 'react';
import "./ProjectsNavBar.css";

function ProjectsNavBar(props) {
    return (
        <div className="bg-light p-3 m-0 text-center">
            <h2 className="text-center text-muted">Select A Project</h2>
            {/* Small Screen Box */}
            <div className="row align-items-center newBox">
                <div className="col-sm-12">
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <ul>
                                <li className="smallProjectsMenuLink"><button className="btn mx-0 px-0 pt-0" type="button" onClick={() => props.viewFoodBrief()}><small>Food Buddy</small></button></li>
                                <li className="smallProjectsMenuLink"><button className="btn mx-0 px-0" type="button" onClick={() => props.viewETASBrief()}><small>E.T.A.S.</small></button></li>
                                <li className="smallProjectsMenuLink"><button className="btn mx-0 px-0" type="button" onClick={() => props.viewTransferBrief()}><small>Transfer</small></button></li>
                                <li className="smallProjectsMenuLink"><button className="btn mx-0 px-0" type="button" onClick={() => props.viewBooksBrief()}><small>Databases</small></button></li>
                                <li className="smallProjectsMenuLink"><button className="btn mx-0 px-0" type="button" onClick={() => props.viewMatchBrief()}><small>Match Game</small></button></li>
                                <li className="smallProjectsMenuLink"><button className="btn mx-0 px-0 mb-0 pb-0" type="button" onClick={() => props.viewGiphyBrief()}><small>Axios Search</small></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Large Screen Box */}
            <div className="row imgBox">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item btn" type="button" onClick={() => props.viewFoodBrief()}>Food Buddy<br /><small className="text-primary">*Hackathon Winner*</small></li>
                        <li className="list-group-item btn" type="button" onClick={() => props.viewETASBrief()}>E.T.A.S.<br /><small className="text-primary">*Hackathon Finalist*</small></li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item btn" type="button" onClick={() => props.viewTransferBrief()}>Transfer<br /><small className="text-primary">Marketplace App</small></li>
                        <li className="list-group-item btn" type="button" onClick={() => props.viewBooksBrief()}>Databases<br /><small className="text-primary">Google Books API</small></li>

                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item btn" type="button" onClick={() => props.viewMatchBrief()}>Match Game<br /><small className="text-primary">Javascript + JSON</small></li>
                        <li className="list-group-item btn" type="button" onClick={() => props.viewGiphyBrief()}>Axios Search<br /><small className="text-primary">Giphy API</small></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectsNavBar;