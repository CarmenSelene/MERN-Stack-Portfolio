import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Contacttext from "./Contacttext";

function Contact() {
    return (
        <div className="wrapper">
            <header className="App-header">
            <h1 className="siteTitle">Contact</h1>
                <Navbar />
            </header>
            <div className="contactBody">
                <div className="contactFormSpacer">
                    <Contacttext />
                </div>
            </div>
        </div>
    );
}

export default Contact;