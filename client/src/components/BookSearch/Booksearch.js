import React from "react";
import API from "../../utils/API";
import SearchForm from "./SearchForm";
import Bookresults from "./Bookresults";

export default class Booksearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.doTheSearch = this.doTheSearch.bind(this);
        this.savebook = this.savebook.bind(this);
    };

    componentDidMount() {
        this.doTheSearch("harrypotter");
    };

    doTheSearch = bookquery => {
        console.log("I'm the Search: " + bookquery);
        API.searchBooks(bookquery)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.doTheSearch(this.state.search);
    };

    savebook = (title, author, link) => {
        API.saveBook(title, author, link)
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div className="wrapper">
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Bookresults results={this.state.results} savebook={this.savebook} />
            </div>
        );
    }
}