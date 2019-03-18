import React, { Component } from "react";
import "../Navbar/Navbar.css";
import API from "../../utils/API";
import SearchForm from "./SearchForm";
import Matchresults from "./ResultList";
import "./Search.css";

class Search extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.doTheSearch("hansolo");
    };

    doTheSearch = query => {
        API.searchGiphy(query)
            .then(res => this.setState({ results: res.data.data }))
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

    render() {
        return (
            <div className="wrapper">
                <h1>Axios/API Demo</h1>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Matchresults
                    results={this.state.results} />
            </div>
        );
    }
}

export default Search;