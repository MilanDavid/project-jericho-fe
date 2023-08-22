import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const ColourIntro = React.memo(() => (
    <div>
        <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/colour_hero.jpg') + ")"}} />
        <div className="dark-section">
            <div className="container">
                <Anim className="row mt-4">
                    <div className="col-sm-12">
                        <h1 className="display-1">
                            Colour<span className="text-highlight">.</span>
                        </h1>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default ColourIntro;
