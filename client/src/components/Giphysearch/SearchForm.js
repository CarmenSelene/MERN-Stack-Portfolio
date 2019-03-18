import React from "react";
import "./Search.css";

function SearchForm(props) {
  return (
    <div className="giphySearchBar">
      <form className="formInput">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control gifSearchBar"
          placeholder="Search for a Gif"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary" id="giphySearchButton">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
