import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographyImages = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-12">
                    <div className="w-20 float-left pl-3 pr-3">
                        <p>Golf</p>
                        <img className="img-fluid" src={require('../../../images/photography/golf.png')} />
                    </div>
                    <div className="w-20 float-left pl-3 pr-3">
                        <p>Community</p>
                        <img className="img-fluid" src={require('../../../images/photography/community.png')} />
                    </div>
                    <div className="w-20 float-left pl-3 pr-3">
                        <p>Sustainability</p>
                        <img className="img-fluid" src={require('../../../images/photography/sustainability.png')} />
                    </div>
                    <div className="w-20 float-left pl-3 pr-3">
                        <p>Equipment</p>
                        <img className="img-fluid" src={require('../../../images/photography/equipment.png')} />
                    </div>
                    <div className="w-20 float-left pl-3 pr-3">
                        <p>Corporate</p>
                        <img className="img-fluid" src={require('../../../images/photography/corporate.png')} />
                    </div>
                </div>
            </Anim>
        </div>
    </div>
));

export default PhotographyImages;
