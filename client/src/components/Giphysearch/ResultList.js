import React from "react";
import "./Search.css";

function Giphytext(props) {
  return (
    <ul className="matchBox">
      {props.results.map(result => (
        <li className="resultsBoxes" key={result.id}>
          <img className="clickyBoxes" alt={result.title}
            src={result.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default Giphytext;
