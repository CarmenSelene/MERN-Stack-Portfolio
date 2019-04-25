import React from "react";
import "./GameBox.css";

function Gameresults(props) {
  return (
    <div className="d-inline text-center m-0 p-0">
      <ul className="m-0 mx-5 p-0 px-2">
        {props.results.map(results => (
          <li className="clickyBoxes" key={results.id}>
            <img className="clickyImg" id={results.id} alt={results.name}
              src={results.imgSrc} onClick={() => {
                props.getId(results);
                props.updateCounterClick();
              }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gameresults;