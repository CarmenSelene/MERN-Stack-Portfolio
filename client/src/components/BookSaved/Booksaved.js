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

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  delBook = () => {
    API.deleteBook()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <span className="savedBooksBox">
      <Container fluid>
        <span><strong>My Saved Books: </strong></span>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
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