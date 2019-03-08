import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Giphysearch from "../../components/Giphysearch/Search";
import Giphytext from "./Giphytext";

function Giphy() {
    return (
        <div className="wrapper">
            <header className="App-header">
            <h1 className="siteTitle">Giphy</h1>
                <Navbar />
            </header>
            <div className="App-body">
            <Giphytext />
            <Giphysearch />
            </div>
        </div>
    );
}

export default Giphy;