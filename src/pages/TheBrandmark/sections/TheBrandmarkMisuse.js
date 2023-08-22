import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const TheBrandmarkMisuse = React.memo(()=>(
    <div className="container big-spacing">
        <div className="row">
            <Anim className="col-sm-3">
                <h2 className="display-2">Misuse<span className="text-highlight">.</span></h2>
                <p className="display-3">It is important that the appearance of the logo remains consistent. The logo should not be misinterpreted, modified or added to.</p>
                <p>The logo must never be redrawn, adjusted or modified in any way. It should only be reproduced from the artwork provided. To illustrate this point some of the more likely mistakes are shown.</p>
            </Anim>

            <div className="col-sm-8 offset-sm-1">
                <img className="w-100" src={require('../../../images/ra/logo_misuse.svg')} />
            </div>
        </div>
    </div>
));

export default TheBrandmarkMisuse;
