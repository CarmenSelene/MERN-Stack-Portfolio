import React from 'react';
import "./ProjectBrief.css";

function FoodBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker">
                <strong className="d-inline-block">Food Waste Prevention App</strong><br />
                <span className="subTitleBacker d-inline-block">HackLassonde Hackathon 2019 *First Place*</span>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <img src={require('./foodDemo.png')} alt="Food Buddy Demo" className="demoImage p-3" />
                        </div>
                        <div class="col-lg">
                            <span className="p-3 mx-auto text-left briefText">
                                <p>
                                    Food Waste Buddy is a Hackathon Winning submission that uses Google Home and a mySQL server to create custom voice input/output alerts to help prevent food waste. The user talks into the device, which understands what type of item is being submitted, and applies a set of expirey reminders to help prevent food waste in the home.
                            </p>
                                <a href="https://github.com/SarynSummer/Food-Waste-App" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="text-primary projectsLink my-2"><strong className="linkTextSize">Visit Github Repo</strong></button></a>
                                <ul>
                                    <li>Project Manager</li>
                                    <li>API/Axios</li>
                                    <li>mySQL</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodBrief;