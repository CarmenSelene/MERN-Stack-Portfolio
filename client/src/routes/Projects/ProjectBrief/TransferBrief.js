import React from 'react';
import "./ProjectBrief.css";

function TransferBrief() {
  return (
    <div className="d-inline">
      <div className="my-5 titleBacker">
        <strong className="d-inline-block">Transfer Community Marketplace</strong>
      </div>
      <div className="bg-light text-dark">
        <div className="row p-4 m-2">
          <div className="col">
            MERN Stack
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <p className="text-left briefText px-3">
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