import React from 'react';
import "./Home.css";

function Hometext() {
    return (
        <div className="mainHomeBody">
            <div className="homeSpacer"></div>
            <span className="p-3 mx-auto text-center align-bottom">
                <h1 className="p-3 text-light headlineText">Hi! I'm Saryn Caister and I'm a Full-Stack Web Developer</h1>
                <h3 className="p-3 text-light bg-primary">"Cool! I love it, but does it fit our MVP?"</h3>
            </span>
        </div>
    );
}

export default Hometext;