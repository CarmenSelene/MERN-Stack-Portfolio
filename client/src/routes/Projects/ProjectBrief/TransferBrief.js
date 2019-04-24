import React from 'react';
import "./ProjectBrief.css";

function TransferBrief() {
  return (
    <div className="d-inline">
      <div className="my-5 titleBacker text-center">
        <strong>Transfer Community Marketplace</strong>
      </div>
      <div className="my-5 bodyBacker">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg">
              <img src={require('./transferDemo.png')} alt="Transfer Demo" className="demoImage border p-1" />
            </div>
            <div class="col-lg">
              <span className="p-3 mx-auto briefText">
                <p className="text-left">
                  Transfer is a community marketplace app focused around Toronto using TTC subway stations as meetup points. Users can create accounts with passwords, log in and purchase/trade/sell items by searching by TTC subway station. App is currently still in development.
                            </p>
                <div class="row align-items-center">
                  <div class="col-lg">
                    <ul>
                      <p className="text-muted mt-2">~MERN Stack~</p>
                      <li>MongoDB</li>
                      <li>Express</li>
                      <li>React</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                  <div class="col-lg">
                    <a href="https://obscure-brushlands-10510.herokuapp.com" rel="noopener noreferrer" target="_blank" className="projectsLink"><button type="button" className="btn btn-form btn-block display-4 site siteButton"><strong className="linkTextSize">Visit Site</strong></button></a>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferBrief;