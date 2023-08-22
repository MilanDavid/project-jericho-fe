import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const GraphicLanguageIntro = React.memo(() => (

    <div className="grid-intro">
        <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/graphic_hero.jpg') + ")" }} />
        <div className="dark-section">
            <div className="container">
                <Anim className="row mt-4">
                    <div className="col-12 col-lg-7">
                        <h1 className="display-1 space-bellow">
                            Graphic Language<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3 text-highlight">
                            Ground contouring is key within our sport: it creates strategic and visual interest and
                            helps to maximise creative shot options and intelligent play.
                        </p>
                        <p> We use the undulations of a golf course and the movement of the golf ball over it during
                            play to create a set of visual devices that encapsulate the excitement and energy of the
                            sport.
                        </p>
                        <p>Innovative and progressive, the system recognises the need to amplify modernity and dynamism
                            for the brand to help show that it is at the heart of the sport. It is flexible enough to
                            work across all brand elements, whilst creating a visual link between all.
                        </p>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default GraphicLanguageIntro;
