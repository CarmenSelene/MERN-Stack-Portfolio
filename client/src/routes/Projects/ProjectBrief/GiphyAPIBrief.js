import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function GiphyAPIBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker">
                <strong className="d-inline-block">Giphy API w/ Axios Demo</strong>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <img src={require('./giphyDemo.png')} alt="Giphy API Demo" className="demoImage" />
                        </div>
                        <div class="col-lg">
                            <span className="p-3 mx-auto text-left briefText">
                                <p>
                                    This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
                                    The below client side map function displays the first 10 results in neat boxes with custom styling.</p>
                                <Link to={'/giphy'}><button type="button" className="text-primary projectsLink my-2"><strong className="linkTextSize">Go To Live Page</strong></button></Link>
                                <ul>
                                    <li>API</li>
                                    <li>Axios</li>
                                    <li>Bootstrap 4</li>
                                    <li>Node.js</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiphyAPIBrief;