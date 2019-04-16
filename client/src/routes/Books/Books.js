import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Bookpagecontroller from "./Bookpagecontroller";
import ProjectsNavBar from "../../components/ProjectsNavBar/ProjectsNavBar";

function Books() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">Books</h1>
                <Navbar />
            </header>
            <ProjectsNavBar />
            <div className="App-body">
                <Bookpagecontroller />
            </div>
        </div>
    );
}

export default Books;