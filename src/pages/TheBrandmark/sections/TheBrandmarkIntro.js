import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';


const TheBrandmarkIntro = React.memo(() => (
    <div>
        <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/brandmark_hero.jpg') + ")"}}/>
        <div className="dark-section">
            <div className="container">
                <Anim className="row mt-4">
                    <div className="col-md-6">
                        <h1 className="display-1">
                            The Brandmark<span className="text-highlight">.</span>
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <p>The focal point of our visual identity is our brandmark – a universal signature for our
                            brand.</p>
                        <p>An element that is used across all of our identity system providing a dynamic and distinctive
                            mark on all R&A communications.</p>
                        <p>There are various rules for its application, but we have created a flexible system that
                            allows freedom and diversity.</p>
                    </div>
                </Anim>
                <div className="row">
                    <div className="col-12">
                        <VideoAnim src={require('../../../images/brandmark/brandmark.mp4')} className="brandmark-hero-logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
));

export default TheBrandmarkIntro;
