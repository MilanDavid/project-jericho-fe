import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';

const TypographyIntro = React.memo(() => (
    <div className="typography-intro">
        <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/typography_hero.jpg') + ")"}}/>
        <div className="dark-section">
            <div className="container">
                <Anim className="row mt-4">
                    <div className="col-sm-12">
                        <h1 className="display-1">
                            Typography<span className="text-highlight">.</span>
                        </h1>
                    </div>
                </Anim>
            </div>
        </div>
        <div className="grey-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-md-10 mb-5">
                        <VideoAnim src={require('../../../images/typography/header.mp4')} />
                    </div>
                </Anim>
                <Anim className="row">
                    <div className="offset-md-6 col-md-5">
                        <p>Our chosen brand typeface is Radikal it is a modern geometric sans serif with letterforms and
                            nuances that link visually to our brandmark.</p>
                        <p>We only need this typeface which gives us a diverse range of weights and expresses our values
                            of conviction and integrity whilst remaining friendly and welcoming. We will use this in all
                            communications to help us have a clear and distinct visual identity across all of our
                            communications.</p>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographyIntro;
