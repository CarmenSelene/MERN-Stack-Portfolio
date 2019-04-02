import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Bookpagecontroller from "./Bookpagecontroller";

function Books() {
    return (
        <div className="wrapper">
            <header className="App-header">
            <h1 className="siteTitle">Books</h1>
                <Navbar />
            </header>
            <Bookpagecontroller />
        </div>
    );
}

export default Books;