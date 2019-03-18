import React from "react";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import { Container } from "../Grid";
import { List, ListItem } from "../List";
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
      <span className="savedBooksBox">
      <Container fluid>
        <span><h2>My Saved Books</h2></span>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem className="savedBooksEach" key={book._id}>
                    <a href={"/books" + book._id}>
                      <strong>
                        {this.shortenTitle(book.title)}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.delBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
      </span>
    );
  }
}