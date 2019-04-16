import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import ProjectsNavBar from "../../components/ProjectsNavBar/ProjectsNavBar";
import ProjectBox from "./ProjectBox";

function Projects() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">Projects</h1>
                <Navbar />
            </header>
            <ProjectsNavBar />
            <div className="App-body">
                <ProjectBox />
            </div>
        </div>
    );
}

export default Projects;