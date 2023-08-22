import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const IntroductionHowTo = React.memo(()=>(
    <div className="container big-spacing guidelines">
        <Anim className="row">
            <h2 className="display-2 col-sm-6">
                How to use <br/>the guidelines<span className="text-highlight">.</span>
            </h2>
            <div className="col-sm-6">
                <p className="display-3">Through using and understanding these guidelines you will be able to create successful on-brand communications for The R&A.</p>
                <p>The guidelines have been designed to make it easier to visually identify available brand elements and assets and understand how to use them. Specifications and usage standards are provided for each element, followed by application examples demonstrating how they should be used together.</p>
                <p>While it is important that these guidelines are adhered to at all times, they are not intended to restrict creativity. Rather, the aim is to encourage creativity within the parameters of the provided visual identity. Please note that sizes and colours of artwork may not be accurately represented on your screen.</p>
            </div>
        </Anim>
    </div>
));

export default IntroductionHowTo;
