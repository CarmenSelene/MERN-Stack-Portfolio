import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function GiphyAPIBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker">
                <strong className="d-inline-block">Giphy API w/ Axios Demo</strong>
            </div>
            <div className="bg-light text-dark">
                <div className="row p-4 m-2">
                    <div className="col">
                        <ul>
                            <li>API</li>
                            <li>Axios</li>
                            <li>Bootstrap 4</li>
                            <li>Node.js</li>
                        </ul>
                        <p className="text-left briefText px-3">
                            This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
                        The below client side map function displays the first 10 results in neat boxes with custom styling.</p>
                    </div>
                    <div className="col">
                        <Link className="projectsLink" to={'/giphy'}><strong className="text-primary border border-dark bg-dark p-3 m-5">Go To Live Page</strong></Link>
                        <img src={require('./giphyDemo.png')} alt="Giphy API Demo" className="demoImage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiphyAPIBrief;