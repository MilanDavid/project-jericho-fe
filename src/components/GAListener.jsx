import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class GAListener extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.sendPageView(this.props.history.location);
        this.props.history.listen(this.sendPageView);
    }

    sendPageView(location) {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    }

    render() {
        return this.props.children;
    }
}

GAListener.propTypes = {
    history: PropTypes.object,
    children: PropTypes.node,
};

export default withRouter(GAListener);
