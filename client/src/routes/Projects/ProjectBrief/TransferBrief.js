import React from 'react';
import "./ProjectBrief.css";

function TransferBrief() {
  return (
    <div className="d-inline-block">
      <div className="my-4 titleBacker text-center">
        <strong>Transfer Community Marketplace</strong>
      </div>
      <div className="my-3 bodyBacker text-center">
        <div className="row align-items-center imgBox">
          <div className="col-6">
            <img src={require('./transferDemo.png')} alt="Transfer Demo" className="demoImg border m-2 text-center" />
            <br />
          </div>
          <div className="col-6">
            <p className="briefText">
              Transfer is a community marketplace app focused around Toronto using TTC subway stations as meetup points. Users can create accounts with passwords, log in and purchase/trade/sell items by searching by TTC subway station. App is currently still in development.
                  </p>
          </div>
        </div>
        <div className="newBox">
          <div className="col-sm-12">
            <p className="briefText">
              Transfer is a community marketplace app focused around Toronto using TTC subway stations as meetup points. Users can create accounts with passwords, log in and purchase/trade/sell items by searching by TTC subway station. App is currently still in development.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
          <p className="text-muted mt-2">~MERN Stack~</p>
          </div>
        </div>
        <div className="row text-left">
        <div className="col-2 imgBox"></div>
          <div className="col-4">
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="col-2 imgBox"></div>
        </div>
        <div className="row align-items-center">
          <div className="col-12">
            <a href="https://obscure-brushlands-10510.herokuapp.com" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Site</strong></button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferBrief;