import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function GiphyAPIBrief() {
    return (
        <div className="d-inline-block">
            <div className="my-4 titleBacker text-center">
                <strong>Giphy API w/ Axios Demo</strong>
            </div>
            <div className="my-3 bodyBacker text-center">
                <div className="row align-items-center imgBox">
                    <div className="col-6">
                        <img src={require('./giphyDemo.png')} alt="Giphy API Demo" className="demoImg border m-2 text-center" />
                        <br />
                    </div>
                    <div className="col-6">
                        <p className="briefText">
                            This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
                            The below client side map function displays the first 10 results in neat boxes with custom styling.
                                    </p>
                    </div>
                </div>
                <div className="newBox">
                    <div className="col-sm-12">
                        <p className="briefText">
                            This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
                                        The below client side map function displays the first 10 results in neat boxes with custom styling.
                                    </p>
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-2 imgBox"></div>
                    <div className="col-4">
                        <ul>
                            <li>API</li>
                            <li>Axios</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>Bootstrap 4</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className="col-2 imgBox"></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12">
                        <Link to={'/giphy'}><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Page</strong></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiphyAPIBrief;