import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';

const ColourBrandmark = React.memo(() => (
    <div className="grey-section">
        <div className="container big-spacing">
            <Anim className="row pb-5">
                <div className="col-sm-4">
                    <h2 className="display-2">
                        Brandmark<span className="text-highlight">.</span>
                    </h2>
                    <p className="display-3">The diagram below highlights the hierarchy in which our brand logos should
                        be used.</p>
                </div>

                <div className="col-sm-6 offset-sm-1">
                    <p>In brand collateral that talks about the brand as a whole, or about more
                        than one of our brand pillars, the Master Brand logo should be used.
                        i.e. Staff Uniform</p>

                    <p>If brand collateral is produced that is focused on one specific brand
                        pillar then the corresponding version of the logo should be used.
                        i.e. Rule Book (Governance)</p>

                </div>
                <div className="col-sm-4">
                <p className="font-weight-bold">If ever in doubt we use the Master Brand logo.</p>

                <p>Only one version of our brandmark should be used in any piece of brand
                    collateral to avoid confusion (with exception of the website and
                    any document where each pillar has its own separate section).</p>

                </div>
            </Anim>

            <Anim className="row pt-5">
                <div className="col-12">
                    <VideoAnim src={require('../../../images/color/brand_marks.mp4')} />
                </div>
            </Anim>
        </div>
    </div>
));

export default ColourBrandmark;
