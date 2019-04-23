import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function BooksAPIBrief() {
  return (
    <div className="d-inline">
      <div className="my-4 titleBacker">
        <span className="px-2 mx-auto"><strong>Google Books API w/ MongoDB</strong></span>
      </div>
      <div className="bg-light text-dark">
        <div className="row p-4 m-2">
          <div className="col">
            <p className="text-left briefText p-3">
              <strong className="text-center">[API] [Axios] [MongoDB Storage] [JSON Interpolation]</strong><br /><br />
              This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use.
              Can be combined with a login system and userID to create user "save" list.</p>
          </div>
          <div className="col">
            <Link className="projectsLink" to={'/books'}><strong className="text-primary border border-dark bg-dark p-3 m-5">Go To Live Page</strong></Link>
            <img src={require('./booksDemo.png')} alt="Match Game Demo" className="demoImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksAPIBrief;