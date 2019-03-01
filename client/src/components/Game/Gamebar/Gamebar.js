import React from "react";
import "./Gamebar.css";

function Gamebar(props) {
    return (
            <ul className="gameBar">
                <li className="gameBars">
                    Matches: {props.countstate}
                </li>
                <li className="gameBars">
                    GameOver?: {props.gamestate}
                </li>
            </ul>
        );
    }

export default Gamebar;