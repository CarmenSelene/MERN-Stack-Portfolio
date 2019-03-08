import React from "react";
import "./Search.css";

function SearchForm(props) {
  return (
      <form className="giphySeachInputBar">
        <div className="formInput">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Gif"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary btn-lg mt-3">
            Search
        </button>
        </div>
      </form>
  );
}

export default SearchForm;
