import React from "react";
import "./Booksearch.css";

function SearchForm(props) {
  return (
    <div className="wrapper">
      <form>
        <div className="formInput">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for Books"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
        </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
