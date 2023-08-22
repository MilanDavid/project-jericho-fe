import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographyWhatToShoot = React.memo(() => (
    <div>
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-12 col-sm-5">
                    <h2 className="display-2">
                        Best Practice<span className="text-highlight">.</span>
                    </h2>
                    <p className="font-weight-bold">Note:</p>
                    <p>The images here are shown as best practice examples and are for reference only. They should act
                        as a starting point when commissioning photography to create our own brand image bank, but
                        should not be directly used in any brand collateral.</p>
                    <p>The R&A do not own the rights to these images.</p>
                </div>
            </Anim>
        </div>


    </div>
));

export default PhotographyWhatToShoot;
