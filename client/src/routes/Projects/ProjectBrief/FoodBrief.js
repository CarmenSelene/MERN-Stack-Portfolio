import React from 'react';
import "./ProjectBrief.css";

function FoodBrief() {
    return (
        <div className="d-inline">
            <div className="my-4 titleBacker">
                <span className="px-2 mx-auto">
                    <strong>Food Waste Prevention App</strong><br />
                    <span className="text-muted subTitleBacker">HackLassonde Hackathon 2019 *First Place*</span>
                </span>
            </div>
            <div className="bg-light text-dark">
                <div className="row p-4 m-2">
                    <div className="col">
                        <p className="text-left briefText p-3">
                            <strong className="text-center">[API] [Axios] [mySQL Storage] [Java Integration] [Project Management]</strong><br /><br />
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