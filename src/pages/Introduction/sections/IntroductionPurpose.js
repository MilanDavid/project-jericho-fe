import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const IntroductionPurpose = React.memo(()=>(
    <div className="dark-section purpose">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-6">
                    <h2 className="display-2">
                        Our Purpose<span className="text-highlight">.</span>
                    </h2>
                    <p className="display-3">
                        We are here to make golf more accessible, appealing and inclusive, and to ensure it’s thriving 50 years from now.
                    </p>
                </div>
            </Anim>
        </div>
    </div>
));

export default IntroductionPurpose;
