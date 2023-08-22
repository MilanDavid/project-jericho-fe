import React from 'react';
import Asset from '~/components/Asset/Asset.js';
import AssetDisplay from '~/components/AssetDisplay/AssetDisplay.js';
import Anim from '~/components/Anim/Anim.js';

const TheBrandmarkMonotone = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <div className="row mb-4">
                <Anim className="col-sm-5">
                    <h2 className="display-2">Monotone<span className="text-highlight">.</span></h2>
                </Anim>
                <Anim className="col-sm-5 offset-sm-2">
                    <p className="display-3">In instances where the use of colour is restricted, the
                        brandmark can also appear in single colour.</p>
                </Anim>
            </div>
            <div className="row">
                <Asset intKey="TheBrandmark_Monotone_Dark" className="brandmark-asset-basket-container col-sm-6">
                    <div className="brandmark-asset-basket d-flex justify-content-center align-items-center">
                        <p className="brandmark-asset-bask-note">On light</p>
                        <AssetDisplay
                            className="w-75"
                            defaultImg="https://via.placeholder.com/555X300/041E42/fff?text=555+x+300"
                            intKey="TheBrandmark_Monotone_Dark"/>
                    </div>
                </Asset>

                <Asset intKey="TheBrandmark_Monotone_Light" className="brandmark-asset-basket-container col-sm-6">
                    <div
                        className="brandmark-asset-basket brandmark-asset-basket--black d-flex justify-content-center align-items-center">
                        <p className="brandmark-asset-bask-note">On dark</p>
                        <AssetDisplay
                            className="w-75"
                            defaultImg="https://via.placeholder.com/555X300/fff/041E42?text=555+x+300"
                            intKey="TheBrandmark_Monotone_Light"/>
                    </div>
                </Asset>
            </div>
        </div>
    </div>
));

export default TheBrandmarkMonotone;
