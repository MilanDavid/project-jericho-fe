import React from 'react';
import classNames from 'classnames';
import Anim from '~/components/Anim/Anim.js';

class GraphicLanguageUsage extends React.Component {

    constructor(props) {

        super(props);

        this.pillars = {
            portrait: {
                name: 'Portrait',
                patterns: {
                    pattern1: {
                        name: 'Pattern 1',
                        asset: require('../../../images/graphic/Graphic_Language_Portrait_Pattern1.png')
                    },
                    pattern2: {
                        name: 'Pattern 2',
                        asset: require('../../../images/graphic/Graphic_Language_Portrait_Pattern2.png')
                    },
                    pattern3: {
                        name: 'Pattern 3',
                        asset: require('../../../images/graphic/Graphic_Language_Portrait_Pattern3.png')
                    }
                }
            },
            landscape: {
                name: 'Landscape',
                patterns: {
                    pattern1: {
                        name: 'Pattern 1',
                        asset: require('../../../images/graphic/Graphic_Language_Landscape_Pattern1.png')
                    },
                    pattern2: {
                        name: 'Pattern 2',
                        asset: require('../../../images/graphic/Graphic_Language_Landscape_Pattern2.png')
                    },
                    pattern3: {
                        name: 'Pattern 3',
                        asset: require('../../../images/graphic/Graphic_Language_Landscape_Pattern3.png')
                    }
                }
            },
        };

        this.pillarsOrder = ['portrait', 'landscape'];

        this.state = {
            activePillar: this.pillarsOrder[0],
            activeSubPillar: 'pattern1'
        };
    }

    /**
     * Handlers
     */

    selectPillar = (pillar) => {
        this.setState(() => ({
            activePillar: pillar,
            activeSubPillar: 'pattern1',
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
            <div className="grey-section">
                <div className="container big-spacing">
                    <Anim className="row">
                        <div className="col-sm-5 brandpillars-content">
                            <h2 className="display-2">
                                Usage<span className="text-highlight">.</span>
                            </h2>
                            <p className="display-3">
                                The pattern should be used at the bottom of our communications.
                            </p>

                            <p>This creates consistency and a recognisable asset.</p>

                            <p className="font-weight-bold">Select format:</p>

                            {this.pillarsOrder.map((pillarKey) => {
                                const pillar = this.pillars[pillarKey];
                                return (
                                    <button
                                        className={classNames('btn mr-3 btn-outline-primary', {'active': this.state.activePillar === pillarKey})}
                                        key={pillarKey}
                                        onClick={this.selectPillar.bind(null, pillarKey)}>
                                        {pillar.name}
                                    </button>
                                );
                            })}

                            <p className="font-weight-bold mt-3">Select Pattern:</p>

                            {Object.keys(this.pillars[this.state.activePillar].patterns).map((patternKey) => {
                                const pattern = this.pillars[this.state.activePillar].patterns[patternKey];
                                return (
                                    <button
                                        className={classNames('btn mr-3 btn-outline-primary', {'active': this.state.activeSubPillar === patternKey})}
                                        key={pattern.asset}
                                        onClick={this.activeSubPillar.bind(null, patternKey)}>
                                        {pattern.name}
                                    </button>
                                );
                            })}

                        </div>
                        <div className="offset-sm-1 col-sm-6">
                            <img className="img-fluid"
                                 src={this.pillars[this.state.activePillar].patterns[this.state.activeSubPillar].asset} />
                        </div>
                    </Anim>
                </div>
            </div>
        );
    }
}

export default GraphicLanguageUsage;
