import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function MatchGameBrief() {
    return (
        <div className="wrapper">
            <h1>Javascript Match Game</h1>
            <div class="d-flex bg-light text-dark mx-5">
                <div class="p-4 m-auto">
                    <p className="text-justify p-4 m-2 briefText">
                        Using a custom JSON file of image references and other data an array is created that tracks whether or not an image has been clicked on yet. User tries to click on all images without repeating any. Images shuffle based on random number generator after each click and "points" are tracked by the pages state.</p>
                        <img src={require('./matchDemo.png')} alt="Match Game Demo" className="demoImage" />
                        <Link className="projectsLink" to={'/match'}><strong className="text-primary border border-dark bg-dark p-3 m-2">Go To Live Page</strong></Link>
                </div>
            </div>
        </div>
    );
}

export default MatchGameBrief;