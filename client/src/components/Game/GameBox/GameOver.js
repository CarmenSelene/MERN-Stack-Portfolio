import React from "react";
import "./GameBox.css";

function GameOver(props) {
    return (
        <form className="gameOver">
            <h1>Game Over!</h1>
            <p>You got: {props.countstate}</p>
            <p>Game State:  {props.gamestate}</p>
            <button type="submit" className="gameOverButton" onClick={() => {
                props.newGame();
            }}>New Game?</button>
        </form>
    );
}

export default GameOver;