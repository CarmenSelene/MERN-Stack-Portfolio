import React from 'react';
import Videobacker from "./Videobacker";
import "./Home.css";

function Hometext() {
    return (
        <div className="wrapper">
            <p className="videoCaption">CLICK ME!</p>
            <Videobacker />
        </div>
    );
}

export default Hometext;