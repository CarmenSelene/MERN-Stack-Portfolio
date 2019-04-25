import React from "react";
import "./Gamebar.css";

function Gamebar(props) {
    return (
            <ul className="gameBar mx-5 p-2">
                <li className="matchCounter">
                    Points: {props.countstate}
                </li>
                <li className="gameDesc">
                    Can you click them all?
                </li>
            </ul>
        );
    }

export default Gamebar;