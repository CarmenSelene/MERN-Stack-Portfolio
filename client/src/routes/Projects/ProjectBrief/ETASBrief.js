import React from 'react';
import "./ProjectBrief.css";

function ETASBrief() {
    return (
        <div className="d-inline-block">
            <div className="my-4 titleBacker text-center">
                <strong>Emotion Tracking Alert System [ETAS]</strong>
                <span className="subTitleBacker d-inline-block">Microsoft AZURE AI/Machine Learning Hackathon *Finalist*</span>
            </div>
            <div className="my-3 bodyBacker text-center">
                <div className="row align-items-center imgBox">
                    <div className="col-6">
                        <img src={require('./etasDemo.png')} alt="ETAS Demo" className="demoImg border m-2 text-center" />
                        <br />
                    </div>
                    <div className="col-6">
                        <p className="briefText">
                            Using multiple AI and machine learning algorithms based on the Azure infrastructure we designed and implemented a way to capture emotional data to compliment DART assessment during post trauma care. The project repo holds our simple mySQL server and node.js to communitate via the AI API's and out test database that was demo'd as part of our finalist submission. The Prezi presentation contains screenshots and further detials.
                                    </p>
                    </div>
                </div>
                <div className="newBox">
                    <div className="col-sm-12">
                        <p className="briefText">
                            Using multiple AI and machine learning algorithms based on the Azure infrastructure we designed and implemented a way to capture emotional data to compliment DART assessment during post trauma care. The project repo holds our simple mySQL server and node.js to communitate via the AI API's and out test database that was demo'd as part of our finalist submission. The Prezi presentation contains screenshots and further detials.
                        </p>
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-2 imgBox"></div>
                    <div className="col-4">

                        <ul>
                            <li>Node.js</li>
                            <li>API</li>
                            <li>Handlebars</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>mySQL</li>
                            <li>Microsoft Azure</li>
                            <li>Project Manager</li>
                        </ul>
                    </div>
                    <div className="col-2 imgBox"></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12">
                        <a href="https://prezi.com/4p4e93t6taaz/etas-evoke-2019-hackathon-finalist/" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">View Prezi Presentation</strong></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ETASBrief;