import React from 'react';
import "./Home.css";

function Hometext() {
    return (
        <div className="mainHomeBody">
            <div className="homeSpacer"></div>
            <span className="p-3 mx-auto text-center align-bottom">
                <h3 className="p-3 m-0 text-light headlineText">Hi! I'm Saryn and a Full-Stack Web Developer.</h3>
                <h3 className="p-3 m-0 taglineText">"I love your idea! Does it meet our MVP?"</h3>
            </span>
        </div>
    );
}

export default Hometext;