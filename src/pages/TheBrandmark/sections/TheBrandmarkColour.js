import React from 'react';
import classNames from 'classnames';
import Asset from '~/components/Asset/Asset.js';
import AssetDisplay from '~/components/AssetDisplay/AssetDisplay.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';
import Anim from '~/components/Anim/Anim.js';

const brandPillars = {
    'master-brand': {
        name: 'Master Brand',
        assets: {
            dark: 'TheBrandmark_Color_Master_Dark',
            light: 'TheBrandmark_Color_Master_Light'
        }
    },
    'championships': {
        name: 'Championships',
        assets: {
            dark: 'TheBrandmark_Color_Championships_Dark',
            light: 'TheBrandmark_Color_Championships_Light'
        }
    },
    'sustainability': {
        name: 'Sustainability',
        assets: {
            dark: 'TheBrandmark_Color_Sustainability_Dark',
            light: 'TheBrandmark_Color_Sustainability_Light'
        }
    },
    'development': {
        name: 'Development',
        assets: {
            dark: 'TheBrandmark_Color_Development_Dark',
            light: 'TheBrandmark_Color_Development_Light'
        }
    },
    'governance': {
        name: 'Governance',
        assets: {
            dark: 'TheBrandmark_Color_Governance_Dark',
            light: 'TheBrandmark_Color_Governance_Light'
        }
    },
    'amateur-championships': {
        name: 'Amateur Championships',
        assets: {
            dark: 'TheBrandmark_Color_Amateur_Championships_Dark',
            light: 'TheBrandmark_Color_Amateur_Championships_Light'
        }
    },
};

// Ensure that the order is the same in all browsers
const brandPillarOrder = ['master-brand', 'championships', 'sustainability', 'development', 'governance', 'amateur-championships'];

class TheBrandmarkColour extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activePillar: brandPillarOrder[0]
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
            <div className="grey-section">
                <div className="container">
                    <Anim className="row">
                        <div className="col-12">
                            <VideoAnim src={require('../../../images/color/brand_marks.mp4')} />
                        </div>
                    </Anim>
                </div>
                <div className="container big-spacing">
                    <div className="row">
                        <div className="col-sm-5 brandpillars-examples">
                            <Asset intKey={brandPillars[this.state.activePillar].assets.dark}
                                   className="brandmark-asset-basket-container">
                                <div
                                    className="brandmark-asset-basket d-flex justify-content-center align-items-center">
                                    <p className="brandmark-asset-bask-note">On light</p>
                                    <AssetDisplay
                                        className="w-75"
                                        defaultImg="https://via.placeholder.com/457X300/fff/041E42?text=457+x+300"
                                        intKey={brandPillars[this.state.activePillar].assets.dark}/>
                                </div>
                            </Asset>

                            <Asset intKey={brandPillars[this.state.activePillar].assets.light}
                                   className="brandmark-asset-basket-container">
                                <div
                                    className="brandmark-asset-basket brandmark-asset-basket--dark d-flex justify-content-center align-items-center">
                                    <p className="brandmark-asset-bask-note">On dark</p>
                                    <AssetDisplay
                                        className="w-75"
                                        defaultImg="https://via.placeholder.com/457X300/041E42/fff?text=457+x+300"
                                        intKey={brandPillars[this.state.activePillar].assets.light}/>
                                </div>
                            </Asset>
                        </div>
                        <Anim className="offset-sm-1 col-sm-6 brandpillars-content">
                            <h2 className="display-2">
                                Colour<span className="text-highlight">.</span>
                            </h2>
                            <p className="display-3">
                                The R&A Blue is our primary choice for the brandmark colour where the application
                                permits. In some circumstances this can be reversed to use white on R&A Blue.
                            </p>
                            <p>The R&A brandmark can only be reproduced in R&A Blue or white. The brandmark must never
                                appear as a tint of a colour.</p>
                            <p>The colour selected for the brandmark on any application must always provide maximum
                                contrast.</p>
                            <p>The ball will be produced in the colour relevant to the key strategic pillars. For
                                example, if the application refers to the masterbrand this will remain light blue.</p>
                            <p>Select appropriate brand pillar.</p>

                            {brandPillarOrder.map((pillarKey) => {
                                const pillar = brandPillars[pillarKey];
                                return (
                                    <button
                                        className={classNames('btn mb-3 mr-3 btn-outline-primary', {'active': this.state.activePillar === pillarKey})}
                                        key={pillarKey}
                                        onClick={this.selectPillar.bind(null, pillarKey)}>
                                        {pillar.name}
                                    </button>
                                );
                            })}
                        </Anim>
                    </div>
                </div>
            </div>
        );
    }
}

export default TheBrandmarkColour;
