import axios from "axios";

const GiphyBASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const GiphyAPIKEY = "&api_key=dc6zaTOxFJmzC&limit=10";

const BookBASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const BookAPIKEY = "&orderBy=newest";

export default {
  // Search GIPHY API
  searchGiphy: function (query) {
    return axios.get(GiphyBASEURL + query + GiphyAPIKEY);
  },
  // Search Google Books API
  searchBooks: function (bookquery) {
    return axios.get(BookBASEURL + bookquery + BookAPIKEY);
  },
  // Gets all db.items
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the db.item with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the db.item with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a db.item to the database
  saveBook: function (title, author, link) {
    return axios.post("/api/books/", {title: title, author: author, link: link});
  }
};
