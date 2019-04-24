import React from 'react';
import "./ProjectBrief.css";

function FoodBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker">
                <strong className="d-inline-block">Food Waste Prevention App</strong><br />
                <span className="subTitleBacker d-inline-block">HackLassonde Hackathon 2019 *First Place*</span>
            </div>
            <div className="bg-light text-dark">
                <div className="row p-4 m-2">
                    <div className="col">
                        <ul>
                            <li>API</li>
                            <li>Axios</li>
                            <li>mySQL</li>
                            <li>Project Manager</li>
                        </ul>
                        <p className="text-left briefText px-3">
                            Food Waste Buddy is a Hackathon Winning submission that uses Google Home and a mySQL server to create custom voice input/output alerts to help prevent food waste. The user talks into the device, which understands what type of item is being submitted, and applies a set of expirey reminders to help prevent food waste in the home.</p>
                    </div>
                    <div className="col">
                        <a href="https://github.com/SarynSummer/Food-Waste-App" rel="noopener noreferrer" target="_blank" className="projectExternalLink"><button type="button" className="text-primary border border-dark bg-dark p-3 m-5"><strong>Visit Github Repo</strong></button></a>
                        <img src={require('./foodDemo.png')} alt="Food Buddy Demo" className="demoImage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodBrief;