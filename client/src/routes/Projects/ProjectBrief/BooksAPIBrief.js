import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function BooksAPIBrief() {
  return (
    <div className="d-inline-block">
      <div className="my-4 titleBacker text-center">
        <strong>Google Books API w/ MongoDB</strong>
      </div>
      <div className="my-3 bodyBacker text-center">
        <div className="row align-items-center imgBox">
          <div className="col-6">
            <img src={require('./booksDemo.png')} alt="Match Game Demo" className="demoImg border m-2 text-center" />
            <br />
          </div>
          <div className="col-6">
            <p className="briefText">
              This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use.
                            </p>
          </div>
        </div>
        <div className="newBox">
          <div className="col-sm-12">
            <p className="briefText">
              This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use.
                            </p>
          </div>
        </div>
        <div className="row text-left">
        <div className="col-2 imgBox"></div>
        <div className="col-4">
            <ul>
              <li>API</li>
              <li>Axios</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>MongoDB</li>
              <li>JSON</li>
            </ul>
          </div>
          <div className="col-2 imgBox"></div>
        </div>
        <div className="row align-items-center">
          <div className="col-12">
            <Link to={'/books'}><button type="button" className="btn btn-form btn-block display-4 siteButton"><strong className="linkTextSize">Visit Page</strong></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksAPIBrief;