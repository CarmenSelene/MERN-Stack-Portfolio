import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function BooksAPIBrief() {
  return (
    <div className="d-inline">
      <div className="my-5 titleBacker">
        <strong className="d-inline-block">Google Books API w/ MongoDB</strong>
      </div>
      <div className="my-5 bodyBacker">
        <div class="container">
          <div class="row">
            <div class="col-lg">
              <img src={require('./booksDemo.png')} alt="Match Game Demo" className="demoImage p-3" />
            </div>
            <div class="col-lg">
              <span className="p-3 mx-auto text-left briefText">
                <p>
                  This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use.
                            </p>
                <Link to={'/books'}><button type="button" className="text-primary projectsLink my-2"><strong className="linkTextSize">Go To Live Page</strong></button></Link>
                <ul>
                  <li>API</li>
                  <li>Axios</li>
                  <li>MongoDB</li>
                  <li>JSON</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksAPIBrief;