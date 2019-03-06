import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Booksearch from "../../components/BookSearch/Booksearch";

function Books() {
    return (
        <div className="wrapper">
            <header className="App-header">
            <h1 className="siteTitle">Book Search</h1>
                <Navbar />
            </header>
            <div className="App-body">
            <Booksearch />
            </div>
        </div>
    );
}

export default Books;