import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import {Player, ControlBar, BigPlayButton} from 'video-react';

const IntroductionIntro = React.memo(() => (

    <div>
        <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/introduction_hero.jpg') + ")"}} />
        <div className="dark-section">
            <div className="container">

                <Anim className="row mt-4">
                    <h1 className="display-1 col-sm-6">
                        Welcome<span className="text-highlight">.</span>
                    </h1>
                    <div className="col-sm-6">
                        <p>Formed in 2004 and based in St Andrews, The R&A engages in and supports activities
                            undertaken for the benefit of the sport of golf.</p>
                        <p>The R&A organises The Open, golf’s oldest and most international Major championship. The
                            R&A
                            also organises a series of amateur and junior golf events.</p>
                    </div>
                </Anim>

                <div className="row mt-4">
                    <div className="col-sm-12">
                        <Player
                            playsInline
                            muted={false}
                            poster={require('../../../images/intro/intro-poster.jpg')}
                            src={require('../../../images/intro/intro.mp4')}
                        >
                            <ControlBar disableCompletely={false}/>
                            <BigPlayButton position="center"/>
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

export default IntroductionIntro;
