import React from 'react';
import Asset from '~/components/Asset/Asset.js';
import AssetDisplay from '~/components/AssetDisplay/AssetDisplay.js';
import classNames from 'classnames';
import Anim from '~/components/Anim/Anim.js';

const patternPillars = {
    'master-brand': {
        name: 'Master brand',
        assets: {
            pattern1: 'GraphicLanguage_Patterns_Master_1',
            pattern2: 'GraphicLanguage_Patterns_Master_2',
            pattern3: 'GraphicLanguage_Patterns_Master_3',
        }
    },
    'championships': {
        name: 'Championships',
        assets: {
            pattern1: 'GraphicLanguage_Patterns_Championships_1',
            pattern2: 'GraphicLanguage_Patterns_Championships_2',
            pattern3: 'GraphicLanguage_Patterns_Championships_3',
        }
    },
    'development': {
        name: 'Development',
        assets: {
            pattern1: 'GraphicLanguage_Patterns_Development_1',
            pattern2: 'GraphicLanguage_Patterns_Development_2',
            pattern3: 'GraphicLanguage_Patterns_Development_3',
        }
    },
    'governance': {
        name: 'Governance',
        assets: {
            pattern1: 'GraphicLanguage_Patterns_Governance_1',
            pattern2: 'GraphicLanguage_Patterns_Governance_2',
            pattern3: 'GraphicLanguage_Patterns_Governance_3',
        }
    },
    'sustainability': {
        name: 'Sustainability',
        assets: {
            pattern1: 'GraphicLanguage_Patterns_Sustainability_1',
            pattern2: 'GraphicLanguage_Patterns_Sustainability_2',
            pattern3: 'GraphicLanguage_Patterns_Sustainability_3',
        }
    },
    'amateur-championships': {
        name: 'Amateur Championships',
        assets: {
            pattern1: 'GraphicLanguage_Patterns_Amateur_Championships_1',
            pattern2: 'GraphicLanguage_Patterns_Amateur_Championships_2',
            pattern3: 'GraphicLanguage_Patterns_Amateur_Championships_3',
        }
    },
};

// Ensure that the order is the same in all browsers
const patternPillarsOrder = ['master-brand', 'championships', 'development', 'governance', 'sustainability', 'amateur-championships'];


class GraphicLanguagePatterns extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activePillar: patternPillarsOrder[0]
        };
    }

    /**
     * Handlers
     */

    selectPillar = (pillar) => {
        this.setState(() => ({
            activePillar: pillar
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
                        <div className="col-sm-5 brandpillars-examples">
                            <Asset intKey={patternPillars[this.state.activePillar].assets.pattern1}
                                   name="Pattern1"
                                   className="graphic-pattern-basket-container mb-5">
                                <div
                                    className="graphic-pattern-basket d-flex justify-content-center align-items-center">

                                    <AssetDisplay
                                        className="w-100"
                                        defaultImg="https://via.placeholder.com/457X170/041E42/fff?text=457X170"
                                        intKey={patternPillars[this.state.activePillar].assets.pattern1}/>
                                </div>
                            </Asset>

                            <Asset intKey={patternPillars[this.state.activePillar].assets.pattern2}
                                   name="Pattern1"
                                   className="graphic-pattern-basket-container mb-5">
                                <div
                                    className="graphic-pattern-basket d-flex justify-content-center align-items-center">

                                    <AssetDisplay
                                        className="w-100"
                                        defaultImg="https://via.placeholder.com/457X170/041E42/fff?text=457X170"
                                        intKey={patternPillars[this.state.activePillar].assets.pattern2}/>
                                </div>
                            </Asset>

                            <Asset intKey={patternPillars[this.state.activePillar].assets.pattern3}
                                   name="Pattern1"
                                   className="graphic-pattern-basket-container mb-5">
                                <div
                                    className="graphic-pattern-basket d-flex justify-content-center align-items-center">

                                    <AssetDisplay
                                        className="w-100"
                                        defaultImg="https://via.placeholder.com/457X170/041E42/fff?text=457X170"
                                        intKey={patternPillars[this.state.activePillar].assets.pattern3}/>
                                </div>
                            </Asset>
                        </div>
                        <div className="offset-sm-1 col-sm-6 brandpillars-content">
                            <h2 className="display-2">
                                Our Patterns<span className="text-highlight">.</span>
                            </h2>
                            <p className="display-3">
                                Flowing lines give the impression of the rise and fall of the course, with thickness of
                                line tapering both horizontally and vertically to imply not only change in height, but
                                also movement.
                            </p>
                            <p>The patterns can be used in any of the five colours from our colour palette,
                                to correspond with the subject matter.</p>
                            <p>For example, if creating a campaign based around the Championships,
                                then the Championship colour (lilac) should be used.</p>

                            {patternPillarsOrder.map((pillarKey) => {
                                const pillar = patternPillars[pillarKey];
                                return (
                                    <button
                                        className={classNames('btn mr-3 mb-3 btn-outline-primary', {'active': this.state.activePillar === pillarKey})}
                                        key={pillarKey}
                                        onClick={this.selectPillar.bind(null, pillarKey)}>
                                        {pillar.name}
                                    </button>
                                );
                            })}
                        </div>
                    </Anim>
                </div>
            </div>
        );
    }
}

export default GraphicLanguagePatterns;
