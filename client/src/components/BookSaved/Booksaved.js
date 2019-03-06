import React from "react";
import "./Search.css";

function Booksaved(props) {
  return (
    <div className="searchResultsBox">
      <ul className="resultsBoxes">
        {props.results.map(result => (
          <li className="resultsBoxes" key={result.id}>
            <img className="clickyBoxes" alt={result.title} src={result.images.original.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booksaved;