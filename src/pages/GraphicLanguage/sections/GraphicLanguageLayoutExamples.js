import React from 'react';
import classNames from 'classnames';
import Anim from '~/components/Anim/Anim.js';

class GraphicLanguageLayoutExamples extends React.Component {

    constructor(props) {

        super(props);

        this.pillars = {
            portrait: {
                name: 'Portrait',
                patterns: {
                    ratio1: {
                        name: '1/2',
                        asset: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Portrait_1-2.png')
                    },
                    ratio2: {
                        name: '1/3',
                        asset: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Portrait_1-3.png')
                    },
                    ratio3: {
                        name: 'Full Image',
                        asset: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Portrait_Full.png')
                    }
                }
            },
            landscape: {
                name: 'Landscape',
                patterns: {
                    ratio1: {
                        name: '1/2',
                        asset: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Landscape_1-2.png')
                    },
                    ratio2: {
                        name: '1/3',
                        asset: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Landscape_1-3.png')
                    },
                    ratio3: {
                        name: 'Full Image',
                        asset: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Landscape_Full.png')
                    }
                }
            },
        };


        this.pillarsOrder = ['portrait', 'landscape'];

        this.state = {
            activePillar: this.pillarsOrder[0],
            activeSubPillar: 'ratio1'
        };
    }

    /**
     * Handlers
     */

    selectPillar = (pillar) => {
        this.setState(() => ({
            activePillar: pillar,
            activeSubPillar: 'ratio1',
        }));
    }

    activeSubPillar = (subPillar) => {
        this.setState(() => ({
            activeSubPillar: subPillar
        }));
    }

    /**
     * Render
     */

    render() {
        return (
            <div className="white-section">
                <div className="container big-spacing">
                    <Anim className="row">
                        <div className="col-sm-5 brandpillars-content">
                            <h2 className="display-2">
                                Custom pattern:<br/>Layout examples<span className="text-highlight">.</span>
                            </h2>
                            <p className="display-3">
                                Here are some examples of how the photography works with the patterns in some
                                demonstrative communications.
                            </p>
                            <p className="font-weight-bold m-0">Note:</p>
                            <p>
                                The images here are shown as best practice examples and are for reference only. They
                                should act as a starting point when commissioning photography to create our own brand
                                image bank, but should not be directly used in any brand collateral.
                            </p>

                            <p>The R&amp;A do not own the rights to these images.</p>

                            <p className="font-weight-bold">Select format:</p>

                            {this.pillarsOrder.map((pillarKey) => {
                                const pillar = this.pillars[pillarKey];
                                return (
                                    <button
                                        className={classNames('btn mr-3 mb-3 btn-outline-primary', {'active': this.state.activePillar === pillarKey})}
                                        key={pillarKey}
                                        onClick={this.selectPillar.bind(null, pillarKey)}>
                                        {pillar.name}
                                    </button>
                                );
                            })}

                            <p className="font-weight-bold mt-3">Select Ratio:</p>

                            {Object.keys(this.pillars[this.state.activePillar].patterns).map((patternKey) => {
                                const pattern = this.pillars[this.state.activePillar].patterns[patternKey];
                                return (
                                    <button
                                        className={classNames('btn mr-3 mb-3 btn-outline-primary', {'active': this.state.activeSubPillar === patternKey})}
                                        key={pattern.asset}
                                        onClick={this.activeSubPillar.bind(null, patternKey)}>
                                        {pattern.name}
                                    </button>
                                );
                            })}

                        </div>
                        <div className="offset-sm-1 col-sm-6">
                            <img
                                className="img-fluid"
                                src={this.pillars[this.state.activePillar].patterns[this.state.activeSubPillar].asset}
                            />
                        </div>
                    </Anim>
                </div>
            </div>
        );
    }
}

export default GraphicLanguageLayoutExamples;
