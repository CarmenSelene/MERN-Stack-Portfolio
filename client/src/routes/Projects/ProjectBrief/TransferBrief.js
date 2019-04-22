import React from 'react';
import "./ProjectBrief.css";

function TransferBrief() {
  return (
    <div className="d-inline">
      <div className="my-4">
        <h2>Transfer Community Marketplace</h2>
      </div>
      <div className="bg-light text-dark">
        <div className="row p-4 m-2">
          <div className="col">
            <p className="text-left briefText p-3">
              <strong className="text-center">[MERN Stack] MongoDB, Express, React, Node.js</strong><br /><br />
              Transfer is a community marketplace app focused around Toronto using TTC subway stations as meetup points. Users can create accounts with passwords, log in and purchase/trade/sell items by searching by TTC subway station. App is currently still in development.
            </p>
          </div>
          <div className="col">
            <a href="https://obscure-brushlands-10510.herokuapp.com" rel="noopener noreferrer" target="_blank" className="projectExternalLink"><button type="button" className="text-primary border border-dark bg-dark p-3 m-5"><strong>Visit Live Site</strong></button></a>
            <img src={require('./transferDemo.png')} alt="Transfer Demo" className="demoImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferBrief;