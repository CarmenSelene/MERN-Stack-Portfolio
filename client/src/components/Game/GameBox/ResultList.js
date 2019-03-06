import React from "react";
import "./GameBox.css";

function Gameresults(props) {
  return (
    <ul className="gameBox">
      {props.results.map(results => (
        <li className="clickyBoxes" key={results.id}>
          <img className="clickyBoxes" id={results.id} alt={results.name}
            src={results.imgSrc} onClick={() => {
              props.getId(results);
              props.updateCounterClick();
            }} />
        </li>
      ))}
    </ul>
  );
}

export default Gameresults;