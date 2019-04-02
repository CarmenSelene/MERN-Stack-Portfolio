import React from 'react';
import Videobacker from "./Videobacker";
import "./Home.css";

function Hometext() {
    return (
        <div className="wrapper">
            <span className="videoCaption">
            <span className="p-3 mx-auto">
            <h3>Welcome to Saryn Caister's Portfolio</h3>
            <br />
            <h6>View a demo from the navbar above</h6>
            <h6> -- or click this screen if you need a smile --</h6>
            </span>
            </span>
            <Videobacker />
        </div>
    );
}

export default Hometext;