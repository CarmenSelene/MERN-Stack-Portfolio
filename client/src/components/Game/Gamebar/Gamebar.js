import React from "react";
import "./Gamebar.css";

function Gamebar(props) {
    return (
            <ul className="gameBar">
                <li className="matchCounter">
                    Points: {props.countstate}
                </li>
                <li className="gameDesc">
                    How many clicks before a repeat click?
                </li>
            </ul>
        );
    }

export default Gamebar;