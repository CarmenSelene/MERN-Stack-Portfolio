import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function GiphyAPIBrief() {
    return (
        <div className="d-inline">
            <div className="my-4">
                <h2>Giphy API w/ Axios Demo</h2>
            </div>
            <div className="bg-light text-dark">
                <div className="row p-4 m-2">
                    <div className="col">
                        <p className="text-left briefText p-3">
                            <strong className="text-center">[API] [Axios] [Bootstrap 4] [Node.js]</strong><br /><br />
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