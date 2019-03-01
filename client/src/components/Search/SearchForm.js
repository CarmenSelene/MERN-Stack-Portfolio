import React from "react";

function SearchForm(props) {
  return (
      <form>
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
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
        </button>
        </div>
      </form>
  );
}

export default SearchForm;
