import React from "react";
import "./Search.css";

function SearchForm(props) {
  return (
    <ul className="giphySearchBar">
      <form>
        <li className="giphySearch">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control gifSearchBar"
            placeholder="Search for a Gif"
            id="search"
          />
        </li>
        <li className="giphySearch">
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
        </button>
        </li>
      </form>
    </ul>
  );
}

export default SearchForm;
