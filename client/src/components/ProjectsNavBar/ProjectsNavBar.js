import React from 'react';
import "./ProjectsNavBar.css";

function ProjectsNavBar(props) {
    return (
        <div className="bg-light">
            <div className="p-4">
                <h2 className="text-center text-muted p-3">Choose A Project</h2>
                <div className="row">
                    <div className="col">
                        <ul class="list-group">
                            <li class="list-group-item btn" type="button" onClick={() => props.viewFoodBrief()}>Food Buddy<br /><small className="text-primary">*Hackathon Winner*</small></li>
                            <li class="list-group-item btn" type="button" onClick={() => props.viewETASBrief()}>E.T.A.S.<br /><small className="text-primary">*Hackathon Finalist*</small></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul class="list-group">
                            <li class="list-group-item btn" type="button" onClick={() => props.viewTransferBrief()}>Transfer<br /><small className="text-primary">Marketplace App</small></li>
                            <li class="list-group-item btn" type="button" onClick={() => props.viewBooksBrief()}>Databases<br /><small className="text-primary">Google Books API</small></li>

                        </ul>
                    </div>
                    <div className="col">
                        <ul class="list-group">
                            <li class="list-group-item btn" type="button" onClick={() => props.viewMatchBrief()}>Match Game<br /><small className="text-primary">Javascript + JSON</small></li>
                            <li class="list-group-item btn" type="button" onClick={() => props.viewGiphyBrief()}>Axios Search<br /><small className="text-primary">Giphy API</small></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsNavBar;