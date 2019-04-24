import React from 'react';
import "./ProjectBrief.css";

function ETASBrief() {
    return (
        <div className="d-inline">
            <div className="my-5 titleBacker">
                <strong className="d-inline-block">Emotion Tracking Alert System [ETAS]</strong>
                <span className="subTitleBacker d-inline-block">Microsoft AZURE AI/Machine Learning Hackathon *Finalist*</span>
            </div>
            <div className="my-5 bodyBacker">
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <img src={require('./etasDemo.png')} alt="ETAS Demo" className="demoImage" />
                        </div>
                        <div class="col-lg">
                            <span className="p-3 mx-auto text-left briefText">
                                <p>
                                    Using multiple AI and machine learning algorithms based on the Azure infrastructure we designed and implemented a way to capture emotional data to compliment DART assessment during post trauma care. The project repo holds our simple mySQL server and node.js to communitate via the AI API's and out test database that was demo'd as part of our finalist submission. The Prezi presentation contains screenshots and further detials.</p>
                                <a href="https://prezi.com/4p4e93t6taaz/etas-evoke-2019-hackathon-finalist/" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="text-primary projectsLink my-2"><strong className="linkTextSize">View Prezi Presentation</strong></button></a>
                                <div className="row">
                                    <div className="col-sm">
                                        <ul>
                                            <li>Node.js</li>
                                            <li>API</li>
                                            <li>Handlebars</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm">
                                        <ul>
                                            <li>mySQL</li>
                                            <li>Microsoft Azure</li>
                                            <li>Project Manager</li>
                                        </ul>
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