import React from "react";
import "./Search.css";

function Bookresults(props) {
  return (
      <ul className="resultsBoxes">
        {props.results.map(result => (
          <li className="eachResult p-5" key={result.id}>
            {result.volumeInfo.title}
          </li>
        ))}
      </ul>
  );
}

export default Bookresults;
