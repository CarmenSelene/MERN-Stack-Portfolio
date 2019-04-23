import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocationWithRouter extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { location } = this.props;
        if (location.pathname === "/") {
            return (<div>
                <li className="nav-item whichPageLink">
                    <strong>Saryn Caister</strong>
                </li> </div>
            );
        } else {
            return (<div>
                <li className="nav-item whichPageLink">
                    <strong>{location.pathname}</strong>
                </li> </div>
            );
        }
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const WhichPage = withRouter(ShowTheLocationWithRouter);

export default WhichPage;