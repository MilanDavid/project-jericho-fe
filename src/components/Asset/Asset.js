import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '~/components/Icons/AddIcon.js';
import RemoveIcon from '~/components/Icons/RemoveIcon.js';
import {connect} from "react-redux";
import '~/components/Asset/Asset.scss';
import api from '../../utils/api.jsx';
import {NotificationManager} from 'react-notifications';

class Asset extends React.Component {

    addToBasket = () => {

        if (!this.fileExists()) {
            NotificationManager.error('Please select an asset for a shown key in media library.', 'Error.', 99999);
        }

        api.addToBasket(this.props.asset).then((response) => {

            if (response.status === 200) {
                this.props.setBasket(response.data);
                NotificationManager.success('Asset has been added to your basket.', 'Success.');
            } else {
                NotificationManager.error('You don\'t have permission to add this item you your basket.', 'Error.', 99999);
            }
        });
    }

    removeFromBasket = () => {
        api.removeFromBasket(this.props.asset).then((response) => {

            if (response.status === 200) {
                this.props.setBasket(response.data);
                NotificationManager.success('Asset has been removed from your basket.', 'Success.');
            } else {
                NotificationManager.error('You don\'t have permission to remove this item from your basket.', 'Error.', 99999);
            }
        });
    }

    fileExists = () => {

        if (!this.props.asset || !this.props.asset.primaryFile) {
            return false;
        }

        return true;
    }

    isInBasket = () => {

        let res = false;

        if (!this.fileExists()) {
            return res;
        }

        this.props.basket.map((item) => {
            if (item.file_id === this.props.asset.primaryFile.id) {
                res = item;
            }
        });

        return !!res;
    }

    render() {

        const {
            children,
            name = "",
            className = "",
            intKey = "",
            integration = "",
        } = this.props;

        if (!integration) {
            api.requestNewIntKey(intKey);
        }

        const fileExists = this.fileExists();
        const inBasket = this.isInBasket();

        return (
            <div className={className}>
                {children}

                {!inBasket &&
                <button className="asset-basket-btn d-flex justify-content-between align-items-center"
                        onClick={this.addToBasket}>
                    <p>{name}</p>
                    {!fileExists &&
                    <small>{intKey}</small>
                    }
                    <p className="d-flex align-items-center">
                        <AddIcon className="asset-basket-btn-add"/>Add to basket
                    </p>
                </button>
                }


                {inBasket &&
                <button className="asset-basket-btn d-flex justify-content-between align-items-center"
                        onClick={this.removeFromBasket}>
                    <p>{name}</p>
                    <p className="d-flex align-items-center">
                        <RemoveIcon className="asset-basket-btn-add"/>Remove from basket
                    </p>
                </button>
                }

            </div>
        );
    }
}

Asset.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    intKey: PropTypes.string,
    children: PropTypes.node,
    asset: PropTypes.object,
    basket: PropTypes.array,
    integration: PropTypes.object,
    setBasket: PropTypes.func,
};

const stateToProp = (state, ownProps) => {

    let integration = state.integrations[ownProps.intKey] || null;

    return {
        integration: integration,
        asset: integration ? integration.asset : null,
        basket: state.basket,
    };
};

const reducerToProp = (dispatch) => {
    return {
        setBasket: (basket) => {
            dispatch({
                type: 'SET_BASKET',
                payload: basket,
            });
        }
    };
};

export default connect(stateToProp, reducerToProp)(Asset);
