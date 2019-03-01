import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Abouttext from "./Abouttext";

function About() {
    return (
        <div className="wrapper">
            <header className="App-header">
            <h1 className="siteTitle">About</h1>
                <Navbar />
            </header>
            <div className="App-body">
            <Abouttext />
            <Search />
            </div>
        </div>
    );
}

export default About;