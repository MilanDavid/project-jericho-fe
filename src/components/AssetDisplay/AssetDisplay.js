import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import './AssetDisplay.scss';

class AssetDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 300
        };
    }

    render() {

        let img = null;
        let showKey = false;

        if (this.props.asset) {
            img = this.props.asset.links.download;
        }

        if (!img && this.props.defaultImg) {
            img = this.props.defaultImg;
            showKey = true;
        }

        return (
            <div className={"asset-display " + this.props.className}>
                {showKey &&
                    <span className="asset-display-key m-2">{this.props.intKey}</span>
                }

                {img &&
                <img
                    className="img-fluid"
                    src={img}
                />}
            </div>
        );
    }
}

AssetDisplay.propTypes = {
    intKey: PropTypes.string,
    className: PropTypes.string,
    defaultImg: PropTypes.string,
    asset: PropTypes.object,
    integration: PropTypes.object,
};

const stateToProp = (state, ownProps) => {

    let integration = state.integrations[ownProps.intKey] || null;

    return {
        integration: integration,
        asset: integration ? integration.asset : null,
    };
};

export default connect(stateToProp)(AssetDisplay);
