import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function MatchGameBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker">
                <strong className="d-inline-block">Javascript Match Game</strong>
            </div>
            <div className="bg-light text-dark">
                <div className="row p-4 m-2">
                    <div className="col">
                        <diw className="row">
                            <div className="col">
                                <ul>
                                    <li>API</li>
                                    <li>Axios</li>
                                    <li>Javascript</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>JSON</li>
                                    <li>Bootstrap 4</li>
                                </ul>
                            </div>
                        </diw>
                        <p className="text-left briefText px-3">
                            Using a custom JSON file of image references and other data an array is created that tracks whether or not an image has been clicked on yet. User tries to click on all images without repeating any. Images shuffle based on random number generator after each click and "points" are tracked by the pages state.</p>
                    </div>
                    <div className="col">
                        <Link className="projectsLink" to={'/match'}><strong className="text-primary border border-dark bg-dark p-3 m-5">Go To Live Page</strong></Link>
                        <img src={require('./matchDemo.png')} alt="Match Game Demo" className="demoImage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchGameBrief;