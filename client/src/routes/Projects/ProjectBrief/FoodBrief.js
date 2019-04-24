import React from 'react';
import "./ProjectBrief.css";

function FoodBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker text-center">
                <strong>Food Waste Prevention App</strong><br />
                <span className="subTitleBacker d-inline-block">HackLassonde Hackathon 2019 *First Place*</span>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg">
                            <img src={require('./foodDemo.png')} alt="Food Buddy Demo" className="demoImage border p-1" />
                        </div>
                        <div class="col-lg">
                            <span className="p-3 mx-auto briefText">
                                <p className="text-left">
                                    Food Waste Buddy is a Hackathon Winning submission that uses Google Home and a mySQL server to create custom voice input/output alerts to help prevent food waste. The user talks into the device, which understands what type of item is being submitted, and applies a set of expirey reminders to help prevent food waste in the home.
                            </p>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <ul>
                                            <li>Project Manager</li>
                                            <li>mySQL</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>API</li>
                                            <li>Axios</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg">
                                        <a href="https://github.com/SarynSummer/Food-Waste-App" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Repo</strong></button></a>
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

export default FoodBrief;