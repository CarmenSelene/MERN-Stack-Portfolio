import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function MatchGameBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker text-center">
                <strong>Javascript Match Game</strong>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg">
                            <img src={require('./matchDemo.png')} alt="Match Game Demo" className="demoImage border p-1" />
                        </div>
                        <div class="col-lg">
                            <span className="p-3 mx-auto text-left briefText">
                                <p>
                                    Using a custom JSON file of image references and other data an array is created that tracks whether or not an image has been clicked on yet. User tries to click on all images without repeating any. Images shuffle based on random number generator after each click and "points" are tracked by the pages state.
                                    </p>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <ul>
                                            <li>JSON</li>
                                            <li>Bootstrap 4</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>Axios</li>
                                            <li>Javascript ES6</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-lg">
                                        <Link to={'/match'}><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Page</strong></button></Link>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchGameBrief;