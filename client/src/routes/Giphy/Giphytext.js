import React from 'react';
import "./Giphy.css";

function Giphytext() {
    return (
        <div className="wrapper">
            <h1>Axios/API Demo</h1>
            <p className="giphyText">This page uses a bootstrap form to accept "string" text input from the user and send it to the "Giphy" API via Axios. The below client side map function displays the first 10 results in neat boxes with custom styling.</p>
        </div>
    );
}

export default Giphytext;