import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';

const ColourSecondaryPalette = React.memo(() => (
    <div>
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-8">
                    <VideoAnim src={require('../../../images/color/intro.mp4')} />
                </div>
                <div className="col-sm-3 offset-sm-1">
                    <h2 className="display-2">
                        Secondary Palette<span className="text-highlight">.</span>
                    </h2>
                    <p className="display-3">
                        Golf is a diverse and exciting sport, and the best way to represent that culture is to use a
                        diverse and vibrant palette ourselves.</p>
                    <p>Our secondary palette colours are inspired by the landscape of golf each taking cues from various areas around the course.</p>

                    <p>This allows our communications to embrace a more modern, colourful language adding energy and
                        dynamism.</p>
                </div>
            </Anim>
        </div>
    </div>
));

export default ColourSecondaryPalette;
