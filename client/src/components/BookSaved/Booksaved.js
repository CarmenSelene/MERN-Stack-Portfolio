import React from "react";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import "./Booksaved.css";

export default class Booksaved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          books: []
        };
    };
    
  componentDidMount() {
    this.loadBooks();
  }

  componentDidUpdate() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  delBook = (id) => {
    API.deleteBook(id)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  shortenTitle = (thisBook) => {
        const parseTitle = thisBook.split(" ");
        const shortenTitle = parseTitle.slice(0, 9);
        const reSpacedTitle = shortenTitle.join(' ');
        return reSpacedTitle;
  }

  render() {
    return (
      <div className="wrapper">
        <h2>My Saved Books</h2>
        <br />
            {this.state.books.length ? (
              <ul className="savedBooksArray">
                {this.state.books.map(book => (
                  <li className="savedBooksEach" key={book._id}>
                    <a href={book.link}>
                      <strong>
                        {this.shortenTitle(book.title)}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.delBook(book._id)} />
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
}