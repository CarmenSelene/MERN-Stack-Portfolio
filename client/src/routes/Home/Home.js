import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Hometext from "./Hometext";

function Home() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">Saryn Caister</h1>
                <Navbar />
            </header>
            <div className="homevideobody">
                <Hometext />
            </div>
        </div>);
}

export default Home;
