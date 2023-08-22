import React from 'react';
import '~/components/Header/Header.scss';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import classNames from 'classnames';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {Sticky} from 'react-sticky';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subMenuActive: false
        };
    }

    /**
     * Handlers
     */

    toggleSubMenu = (ev) => {
        ev.preventDefault();
        this.setState(oldState => ({
            subMenuActive: !oldState.subMenuActive
        }));
    }

    switchPage = () => {
        //De-activate the toggle menu
        this.setState(() => ({
            subMenuActive: false
        }));
    }

    getSubheader = () => {

        return (
            <div className={classNames('sub-navbar', {'sub-navbar--active': this.state.subMenuActive})}>
                <nav className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="d-flex flex-column flex-md-row justify-content-md-between sub-navbar-content">
                                {this.props.navItems.map((item) => (
                                    <li key={`header-item-${item.path}`} className="sub-navbar-item">
                                        <NavLink
                                            to={item.path}
                                            activeClassName="sub-navbar-link--active"
                                            className="sub-navbar-link"
                                            exact
                                            onClick={this.switchPage}
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        );
    }


    render() {

        const basketCount = Object.keys(this.props.basket).length;

        const urls = {
            media: `${process.env.MEDIA_URL}`,
            basket: `${process.env.BASKET_URL}`
        };

        return (
            <div className="header">
                {/* Top header */}
                <div className="container navbar-main main-container">
                    <div className="row justify-content-between align-items-center navbar-main-content">
                        <div className="col-auto navbar-main-menu d-md-flex">
                            <div>
                                <this.props.logo className="navbar-logo"/>
                            </div>
                            <ul className="list-inline navbar-main-items d-sm-flex align-items-sm-center">
                                <li className="navbar-main-item">
                                    <a
                                        href="#"
                                        className={classNames('navbar-main-item-link', 'navbar-main-item-link--active', {'navbar-main-item-link--display': this.state.subMenuActive})}
                                        onClick={this.toggleSubMenu}
                                    >
                                        Brand Guidelines <i className="material-icons">keyboard_arrow_down</i>
                                    </a>
                                </li>
                                <li className="navbar-main-item">
                                    <a href={urls.media} className="navbar-main-item-link">
                                        Library
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-auto justify-content-right navbar-icons">
                            <a href={urls.basket} className="navbar-main-icon">
                                <i className="material-icons">shopping_basket</i>
                                {basketCount > 0 &&
                                <span className="badge badge-primary">{basketCount}</span>
                                }
                            </a>
                            {false &&
                            <a href="#" className="navbar-main-icon">
                                <i className="material-icons">account_circle</i>
                            </a>
                            }
                        </div>

                    </div>
                </div>

                <Sticky topOffset={163}>
                    {({
                          style,
                      }) => (
                        <div className="sticky-container" style={style}>{this.getSubheader()}</div>
                    )}
                </Sticky>
            </div>
        );
    }
}


Header.propTypes = {
    navItems: PropTypes.array,
    basket: PropTypes.array,
    logo: PropTypes.object,
    location: PropTypes.object,
    'location.pathname': PropTypes.string
};

const stateToProp = (state) => {
    return {
        basket: state.basket,
    };
};

export default withRouter(connect(stateToProp)(Header));