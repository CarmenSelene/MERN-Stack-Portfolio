import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function BooksAPIBrief() {
  return (
    <div className="wrapper">
      <h1>Google Books API w/ Storage</h1>
      <div class="d-flex bg-light text-dark mx-5">
        <div class="p-4 m-auto">
          <p className="text-justify p-4 m-2 briefText">
            This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use.
              Can be combined with a login system and userID to create user "save" list.</p>
          <img src={require('./booksDemo.png')} alt="Match Game Demo" className="demoImage" />
          <Link className="projectsLink" to={'/books'}><strong className="text-primary border border-dark bg-dark p-3 m-2">Go To Live Page</strong></Link>
        </div>
      </div>
    </div>
  );
}

export default BooksAPIBrief;