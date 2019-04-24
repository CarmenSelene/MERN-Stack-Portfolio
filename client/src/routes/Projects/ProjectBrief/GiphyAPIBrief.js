import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function GiphyAPIBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker text-center">
                <strong>Giphy API w/ Axios Demo</strong>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg">
                            <img src={require('./giphyDemo.png')} alt="Giphy API Demo" className="demoImage demoImage border p-1" />
                        </div>
                        <div class="col-lg">
                        <span className="p-3 mx-auto briefText">
                                <p className="text-left">
                                    This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
                                    The below client side map function displays the first 10 results in neat boxes with custom styling.
                                    </p>
                                <div class="row align-items-center">
                                    <div class="col-lg">
                                        <ul>
                                            <li>API</li>
                                            <li>Axios</li>
                                            <li>Bootstrap 4</li>
                                            <li>Node.js</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg">
                                        <Link to={'/giphy'}><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Page</strong></button></Link>
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

export default GiphyAPIBrief;