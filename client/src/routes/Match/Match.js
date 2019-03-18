import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import GameBox from "../../components/Game/GameBox/GameBoard";

function Match() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">Match</h1>
                <Navbar />
            </header>
            <div className="App-body">
                <GameBox />
            </div>
        </div>
    );
}

export default Match;
