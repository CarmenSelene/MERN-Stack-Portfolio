import React from "react";
import "./Search.css";

function Giphytext(props) {
  return (
    <div className="matchBox">
      <ul>
        {props.results.map(result => (
          <li className="resultsBoxes" key={result.id}>
            <img className="clickyBoxes" alt={result.title}
              src={result.images.original.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Giphytext;
