import React from "react";
import Booksearch from "../../components/BookSearch/Booksearch";
import Booksaved from "../../components/BookSaved/Booksaved";
import "./Books.css";

export default class Bookpagecontroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewSaved: false
    };
    this.handlePageToggle = this.handlePageToggle.bind(this);
  };

  handlePageToggle = () => {
    console.log(this.state.viewSaved);
    this.setState(prevState => ({
      viewSaved: !prevState.viewSaved
    }));
  };

  render() {
    const text = this.state.viewSaved ? "Search For More Books" : "Go To My Library";
    return (
      <div className="bookControllerBox">
        <h1>Google Books API w/ MongoDB Storage</h1>
        <div class="d-flex bg-light text-dark mx-5">
          <div class="p-4 m-auto">
            <p className="text-justify p-4 m-2">
              This page utilizes the Google Books API to search for books and print out various data from the response to the screen. Users can search the API for data, and then store it on the connected MongoDB database for later use. Can be combined with a login system and userID to create user "save" list.
                </p>
          </div></div>
        <br /><br />
        <span className="bookTitleBox">
          <button type="button" onClick={this.handlePageToggle} className="btn btn-danger btn-lrg m-3">{text}</button>
        </span>
        {this.state.viewSaved ? (
          <div className="App-body">
            <Booksaved />
          </div>
        ) : (
            <div className="App-body">
              <Booksearch />
            </div>
          )}
      </div>
    );
  }
}
