import React from 'react';
import "./ProjectBrief.css";

function TransferBrief() {
  return (
    <div className="d-inline">
      <div className="my-5 titleBacker">
        <strong className="d-inline-block">Transfer Community Marketplace</strong>
      </div>
      <div className="my-5 bodyBacker">
        <div class="container">
          <div class="row">
            <div class="col-lg">
              <img src={require('./transferDemo.png')} alt="Transfer Demo" className="demoImage p-3" />
            </div>
            <div class="col-lg">
              <span className="p-3 mx-auto text-left briefText">
                <p>
                  Transfer is a community marketplace app focused around Toronto using TTC subway stations as meetup points. Users can create accounts with passwords, log in and purchase/trade/sell items by searching by TTC subway station. App is currently still in development.
                            </p>
                <a href="https://obscure-brushlands-10510.herokuapp.com" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="text-primary projectsLink my-2"><strong className="linkTextSize">Visit Live Site</strong></button></a>
                <ul>
                  <p className="text-muted mt-2">~MERN Stack~</p>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferBrief;