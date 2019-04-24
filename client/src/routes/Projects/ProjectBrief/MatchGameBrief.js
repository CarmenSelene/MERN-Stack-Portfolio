import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function MatchGameBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker">
                <strong className="d-inline-block">Javascript Match Game</strong>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <img src={require('./matchDemo.png')} alt="Match Game Demo" className="demoImage p-3" />
                        </div>
                        <div class="col-lg">
                            <span className="p-3 mx-auto text-left briefText">
                                <p>
                                    Using a custom JSON file of image references and other data an array is created that tracks whether or not an image has been clicked on yet. User tries to click on all images without repeating any. Images shuffle based on random number generator after each click and "points" are tracked by the pages state.</p>
                                <Link to={'/match'}><button type="button" className="text-primary projectsLink my-2"><strong className="linkTextSize">Go To Live Page</strong></button></Link>
                                <ul>
                                    <li>JSON</li>
                                    <li>Bootstrap 4</li>
                                    <li>API</li>
                                    <li>Axios</li>
                                    <li>Javascript</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchGameBrief;