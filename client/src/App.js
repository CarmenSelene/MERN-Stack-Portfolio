import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Giphy from "./routes/Giphy/Giphy";
import Home from "./routes/Home/Home";
import Match from "./routes/Match/Match";
import Contact from "./routes/Contact/Contact";
import Books from "./routes/Books/Books.js";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Home */}
        <Route exact={true} path="/" component={Home} />
        {/* About */}
        <Route exact={true} path="/giphy" component={Giphy} />
        {/* Match */}
        <Route exact={true} path="/match" component={Match} />
        {/* Contact */}
        <Route exact={true} path="/books" component={Books} />
        {/* Contact */}
        <Route exact={true} path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
