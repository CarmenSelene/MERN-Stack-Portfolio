import React from 'react';
import Iframe from 'react-iframe';
import "./Home.css";

function Videobox() {
    return (
        <div className="wrapper">
            <Iframe url="https://www.youtube.com/embed/YQy_VxIC4D8"
                width="160vh"
                height="80vh"
                display="initial"
                position="relative"
                seamless
                allowFullScreen />
        </div>
    );
}

export default Videobox;