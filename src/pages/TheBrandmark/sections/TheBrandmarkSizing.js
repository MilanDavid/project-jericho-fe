import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const TheBrandmarkSizings = React.memo(()=>(
    <div className="container big-spacing">
        <div className="row">
            <Anim className="col-sm-5">
                <h2 className="display-2">Sizings<span className="text-highlight">.</span></h2>
                <p className="display-3">There are various sizes that the R&A brandmark can be presented in, to ensure the impact and legibility of the brandmark is not compromised. The sizes here represent our preferred sizings based upon application size.</p>
                <p>Always think laterally about how to apply the brandmark. Every application is unique and the final size and location of the brandmark should reflect the hierarchy of messaging.</p>
                <p>To ensure legibility and impact, the R&A brandmark should never be reproduced at smaller than 8mm height.</p>
                <p>Anything smaller than this and the small use version of the logo should be used. This has larger stencil gaps which have allow for ink bleed at this small size. The smallest this version of the logo can be used is 4mm in height.</p>
            </Anim>

            <div className="col-sm-6 offset-sm-1">
                <img className="img-fluid" src={require('../../../images/ra/sizings.png')} alt="Sizings Example"/>
            </div>
        </div>
    </div>
));

export default TheBrandmarkSizings;
