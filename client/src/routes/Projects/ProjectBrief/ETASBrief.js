import React from 'react';
import "./ProjectBrief.css";

function ETASBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker text-center">
                <strong>Emotion Tracking Alert System [ETAS]</strong>
                <span className="subTitleBacker d-inline-block">Microsoft AZURE AI/Machine Learning Hackathon *Finalist*</span>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg">
                            <img src={require('./etasDemo.png')} alt="ETAS Demo" className="demoImage border p-1" />
                        </div>
                        <div class="col-lg">
                            <span className="p-3 mx-auto briefText">
                                <p className="text-left">
                                    Using multiple AI and machine learning algorithms based on the Azure infrastructure we designed and implemented a way to capture emotional data to compliment DART assessment during post trauma care. The project repo holds our simple mySQL server and node.js to communitate via the AI API's and out test database that was demo'd as part of our finalist submission. The Prezi presentation contains screenshots and further detials.
                                    </p>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <ul>
                                            <li>Node.js</li>
                                            <li>API</li>
                                            <li>Handlebars</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>mySQL</li>
                                            <li>Microsoft Azure</li>
                                            <li>Project Manager</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row align-items-center">
                                        <div class="col-lg">
                                            <a href="https://prezi.com/4p4e93t6taaz/etas-evoke-2019-hackathon-finalist/" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">View Prezi Presentation</strong></button></a>
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

export default ETASBrief;