import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function BooksAPIBrief() {
  return (
    <div className="d-inline">
      <div className="my-5 titleBacker">
          <strong className="d-inline-block">Google Books API w/ MongoDB</strong>
      </div>
      <div className="bg-light text-dark">
        <div className="row p-4 m-2">
          <div className="col">
          <ul>
              <li>API</li>
              <li>Axios</li>
              <li>MongoDB</li>
              <li>JSON</li>
              </ul>
            <p className="text-left briefText px-3">
              This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use.
              Can be combined with a login system and userID to create user "save" list.</p>
          </div>
          <div className="col">
            <Link className="projectsLink" to={'/books'}><strong className="text-primary border border-dark bg-dark p-3 m-5 projectExternalLink">Go To Live Page</strong></Link>
            <img src={require('./booksDemo.png')} alt="Match Game Demo" className="demoImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksAPIBrief;