import React from 'react';
import classNames from 'classnames';
import Anim from '~/components/Anim/Anim.js';

const positions = {
    'a2-portrait': {
        name: 'A2 Portrait',
        asset: require('../../../images/brandmark/positioning_portrait_a2.png')
    },
    'a2-landscape': {
        name: 'A2 Landscape',
        asset: require('../../../images/brandmark/positioning_landscape_a2.png')
    },
    'a3-portrait': {
        name: 'A3 Portrait',
        asset: require('../../../images/brandmark/positioning_portrait_a3.png')
    },
    'a3-landscape': {
        name: 'A3 Landscape',
        asset: require('../../../images/brandmark/positioning_landscape_a3.png')
    },
    'a4-portrait': {
        name: 'A4 Portrait',
        asset: require('../../../images/brandmark/positioning_portrait_a4.png')
    },
    'a4-landscape': {
        name: 'A4 Landscape',
        asset: require('../../../images/brandmark/positioning_landscape_a4.png')
    }
};

const positionOrder = ['a2-portrait', 'a2-landscape', 'a3-portrait', 'a3-landscape', 'a4-portrait', 'a4-landscape'];

class TheBrandmarkPositioning extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activePosition: positionOrder[0]
        };
    }


    /**
     * Handlers
     */

    selectPosition = (position) => {
        this.setState(() => ({
            activePosition: position
        }));
    }


    /**
     * Render
     */

    render() {
        return (
            <div className="dark-section">
                <div className="container big-spacing">
                    <div className="row">
                        <div className="col-sm-5 brandpillars-examples">
                            <img className="img-fluid" src={positions[this.state.activePosition].asset}
                                 alt="Brand Positioning"/>
                        </div>

                        <Anim className="col-sm-5 offset-sm-1 brandpillars-content">
                            <h2 className="display-2">Positioning<span className="text-highlight">.</span></h2>
                            <p className="display-3">In instances where the use of colour is restricted,
                                the brandmark can also appear in single colour.</p>
                            <p>Always think laterally about how to apply the brandmark. Every application is unique and
                                the final size and location of the brandmark should reflect the hierarchy of
                                messaging.</p>
                            <p>Please keep in mind brandmark exclusion rules when placing the brandmark.</p>
                            <div className="position-btn-container">
                                {positionOrder.map((posKey) => {
                                    const pos = positions[posKey];
                                    return (
                                        <button
                                            className={classNames('btn mr-3 mb-3 btn-outline-light brandmark-light-btn', {'brandmark-light-btn--active': this.state.activePosition === posKey})}
                                            key={posKey}
                                            onClick={this.selectPosition.bind(null, posKey)}
                                        >
                                            {pos.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </Anim>

                    </div>
                </div>
            </div>
        );
    }
}


export default TheBrandmarkPositioning;
