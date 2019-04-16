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
                <div class="d-flex bg-light text-dark mx-5">
                    <div class="p-4 m-auto">
                        <p className="text-justify p-4 m-2">
                            This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
                            The below client side map function displays the first 10 results in neat boxes with custom styling.
                </p>
                    </div></div>
                <br /><br />
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