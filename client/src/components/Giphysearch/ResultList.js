import React from "react";
import "./Search.css";

function Giphytext(props) {
  return (
    <div className="matchBox mx-auto mt-5">
      <h3>and then Giphy API says....</h3>
      <ul>
        {props.results.map(result => (
          <li className="resultsBoxes" key={result.id}>
            <img className="clickyBoxes vignette" alt={result.title}
              src={result.images.original.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Giphytext;
