import React from "react";
import Booksearch from "../../components/BookSearch/Booksearch";
import Booksaved from "../../components/BookSaved/Booksaved";

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
      <div>
        <span className="bookTitleBox">
          <button type="button" onClick={this.handlePageToggle} className="btn btn-danger btn-lrg m-3">{text}</button>
        </span>
        {this.state.viewSaved ? (
          <div>
            <Booksaved />
          </div>
        ) : (
            <div>
              <Booksearch />
            </div>
          )}
      </div>
    );
  }
}
