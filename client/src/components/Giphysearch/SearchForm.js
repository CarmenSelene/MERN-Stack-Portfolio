import React from "react";
import "./Search.css";

function SearchForm(props) {
  return (
    <ul className="giphySearchBar">
      <form>
        <li className="giphySearch">
          This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
          The below client side map function displays the first 10 results in neat boxes with custom styling.
        </li>
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
