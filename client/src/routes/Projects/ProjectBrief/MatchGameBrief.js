import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function MatchGameBrief() {
    return (
        <div className="d-inline-block">
            <div className="my-4 titleBacker text-center">
                <strong>Javascript Match Game</strong>
            </div>
            <div className="my-3 bodyBacker text-center">
                <div className="row align-items-center imgBox">
                    <div className="col-6">
                        <img src={require('./matchDemo.png')} alt="Match Game Demo" className="demoImg border m-2 text-center" />
                        <br />
                    </div>
                    <div className="col-6">
                        <p className="briefText">
                            Using a custom JSON file of image references and other data an array is created that tracks whether or not an image has been clicked on yet. User tries to click on all images without repeating any. Images shuffle based on random number generator after each click and "points" are tracked by the pages state.
                                    </p>
                    </div>
                </div>
                <div className="newBox">
                    <div className="col-sm-12">
                        <p className="briefText">
                            Using a custom JSON file of image references and other data an array is created that tracks whether or not an image has been clicked on yet. User tries to click on all images without repeating any. Images shuffle based on random number generator after each click and "points" are tracked by the pages state.
            </p>
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-2 imgBox"></div>
                    <div className="col-4">
                        <ul>
                            <li>JSON</li>
                            <li>Bootstrap 4</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>Axios</li>
                            <li>Javascript ES6</li>
                        </ul>
                    </div>
                    <div className="col-2 imgBox"></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12">
                        <Link to={'/match'}><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Page</strong></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchGameBrief;