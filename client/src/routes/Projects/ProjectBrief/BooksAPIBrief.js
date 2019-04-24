import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function BooksAPIBrief() {
  return (
    <div className="d-inline">
      <div className="my-5 titleBacker text-center">
        <strong>Google Books API w/ MongoDB</strong>
      </div>
      <div className="my-5 bodyBacker">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg">
              <img src={require('./booksDemo.png')} alt="Match Game Demo" className="demoImage border p-1" />
            </div>
            <div class="col-lg">
              <span className="p-3 mx-auto briefText">
                <p className="text-left">
                  This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use.
                            </p>
                <div class="row align-items-center">
                  <div class="col-lg">
                    <ul>
                      <li>API</li>
                      <li>Axios</li>
                      <li>MongoDB</li>
                      <li>JSON</li>
                    </ul>
                  </div>
                  <div class="col-lg">
                    <Link to={'/books'}><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Page</strong></button></Link>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksAPIBrief;