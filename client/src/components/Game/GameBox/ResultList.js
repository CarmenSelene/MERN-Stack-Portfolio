import React from "react";
import "./GameBox.css";

function ResultList(props) {
  return (
    <div className="clickyBox">
      <ul className="clickyBoxes">
        {props.results.map(results => (
          <li className="clickyBoxes" key={results.id}>
            <img className="clickyBoxes" id={results.id} alt={results.name} src={results.imgSrc} onClick={() => {
              props.getId(results);
              props.updateCounterClick();
            }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultList;