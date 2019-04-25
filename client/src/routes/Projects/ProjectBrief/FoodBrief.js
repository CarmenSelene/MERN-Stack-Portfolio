import React from 'react';
import "./ProjectBrief.css";

function FoodBrief() {
    return (
        <div className="d-inline-block">
            <div className="my-4 titleBacker text-center">
                <strong>Food Waste Prevention App</strong><br />
                <span className="subTitleBacker d-inline-block">HackLassonde Hackathon 2019 *First Place*</span>
            </div>
            <div className="my-3 bodyBacker text-center">
                <div className="row align-items-center imgBox">
                    <div className="col-6">
                        <img src={require('./foodDemo.png')} alt="Food Buddy Demo" className="demoImg border m-2 text-center" />
                        <br />
                    </div>
                    <div className="col-6">
                        <p className="briefText">
                            Food Waste Buddy is a Hackathon Winning submission that uses Google Home and a mySQL server to create custom voice input/output alerts to help prevent food waste. The user talks into the device, which understands what type of item is being submitted, and applies a set of expirey reminders to help prevent food waste in the home.
                                    </p>
                    </div>
                </div>
                <div className="newBox">
                    <div className="col-sm-12">
                        <p className="briefText">
                            Food Waste Buddy is a Hackathon Winning submission that uses Google Home and a mySQL server to create custom voice input/output alerts to help prevent food waste. The user talks into the device, which understands what type of item is being submitted, and applies a set of expirey reminders to help prevent food waste in the home.
                        </p>
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-2 imgBox"></div>
                    <div className="col-4">
                        <ul>
                            <li>Project Manager</li>
                            <li>mySQL</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>API</li>
                            <li>Axios</li>
                        </ul>
                    </div>
                    <div className="col-2 imgBox"></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12">
                        <a href="https://github.com/SarynSummer/Food-Waste-App" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Repo</strong></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodBrief;