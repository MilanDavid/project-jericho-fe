import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographyCommunity = React.memo(() => (
    <div>
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-6">
                    <img className="w-100" src={require('../../../images/ra/photography_community.jpg')} alt="Photography Community"/>
                </div>

                <div className="col-sm-5 offset-sm-1 pt-4 pt-sm-0">
                    <h2 className="display-2">
                        Photography:<br/>
                        Community
                    </h2>
                    <p className="display-3">Our imagery for community is driven by authentic moments. Capturing real
                        people in real situations, the way they see it.</p>
                    <p>Using light, perspective and asymmetry we depict moments within a wider context using soft
                        imagery and low contrast to show faces, places and raw emotions.</p>
                    <p>We use a reportage style for community photography so they must always look authentic and be
                        believable, which means body language should be relaxed, never staged and of the moment.</p>
                    <p>Capture real emotions as they happen.</p>
                </div>
            </Anim>
        </div>


    </div>
));

export default PhotographyCommunity;
