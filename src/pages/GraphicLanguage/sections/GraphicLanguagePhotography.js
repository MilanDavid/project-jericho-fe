import React from 'react';
import classNames from 'classnames';
import ScrollBox from '~/components/ScrollBox/ScrollBox.js';
import {withRouter} from 'react-router-dom';
import Anim from '~/components/Anim/Anim.js';

class GraphicLanguagePhotography extends React.Component {

    constructor(props) {

        super(props);

        this.pillars = {
            portrait: {
                name: 'Portrait',
                patterns: {
                    ratio1: {
                        name: 'No Image',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Portrait_No_Image.png')
                    },
                    ratio2: {
                        name: '1/3',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Portrait_1-3.png')
                    },
                    ratio3: {
                        name: '1/2',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Portrait_1-2.png')
                    },
                    ratio4: {
                        name: '2/3',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Portrait_2-3.png')
                    },
                    ratio5: {
                        name: 'Full Image',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Portrait_Full.png')
                    }
                }
            },
            landscape: {
                name: 'Landscape',
                patterns: {
                    ratio1: {
                        name: 'No Image',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Landscape_No_Image.png')
                    },
                    ratio2: {
                        name: '1/3',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Landscape_1-3.png')
                    },
                    ratio3: {
                        name: '1/2',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Landscape_1-2.png')
                    },
                    ratio4: {
                        name: '2/3',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Landscape_2-3.png')
                    },
                    ratio5: {
                        name: 'Full Image',
                        asset: require('../../../images/graphic/Graphic_Language_Use_Photography_Landscape_Full.png')
                    }
                }
            },
        };

        this.pillarsOrder = ['portrait', 'landscape'];

        this.state = {
            activePillar: this.pillarsOrder[0],
            activeSubPillar: 'ratio1'
        };


        this.state.photoExamples = [];
    }

    componentDidMount() {

        this.setState({
            photoExamples: [
                require('../../../images/graphic/asset-38.png'),
                require('../../../images/graphic/asset-39.png'),
                require('../../../images/graphic/asset-38.png'),
                require('../../../images/graphic/asset-40.png'),
                require('../../../images/graphic/asset-41.png'),
                require('../../../images/graphic/asset-42.png'),
                require('../../../images/graphic/asset-33.png'),
                require('../../../images/graphic/asset-34.png'),
                require('../../../images/graphic/asset-35.png'),
                require('../../../images/graphic/asset-36.png'),
                require('../../../images/graphic/asset-37.png')
            ]
        });
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
            <div className="grey-section">
                <div className="container big-spacing">
                    <Anim className="row">
                        <div className="col-sm-5 brandpillars-content">
                            <h2 className="display-2">
                                Use with photography<span className="text-highlight">.</span>
                            </h2>
                            <p className="display-3">
                                When using the pattern and photography
                                together these templates should be
                                used as a guide to your layout.
                            </p>
                            <p> There is flexibility ranging from no imagery to full imagery, and how this works with
                                the patterns.
                            </p>
                            <p>The examples here use A4 as the standard size but this grid and ratio should be adapted
                                to the format and size that you have chosen. This format will inform whether it abides
                                by the portrait or landscape rules.
                            </p>

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
                            <img className="img-fluid"
                                 src={this.pillars[this.state.activePillar].patterns[this.state.activeSubPillar].asset}/>
                        </div>
                    </Anim>
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="font-weight-bold mt-3">Examples:</p>
                        </div>
                    </div>
                    <Anim className="row">
                        <div className="col-sm-12">
                            <ScrollBox>
                                <div className="photo-examples">
                                    {this.state.photoExamples.map((item, key) => {
                                        return (
                                            <div key={key} className="photo-examples-item">
                                                <img className="img-fluid" src={item}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </ScrollBox>
                        </div>
                    </Anim>
                </div>
            </div>
        );
    }
}

export default withRouter(GraphicLanguagePhotography);
