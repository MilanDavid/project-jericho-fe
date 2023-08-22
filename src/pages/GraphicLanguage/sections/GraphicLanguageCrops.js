import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const GraphicLanguageCrops = React.memo(() => (
    <div className="graphic-language-crops">
        <div className="white-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-5">
                        <h2 className="display-2">
                            Crops<span className="text-highlight">.</span>
                        </h2>
                        <p className="display-3">
                            The pattern can be used at full size, or as a crop, creating larger patterns out of the same
                            pattern.
                        </p>
                    </div>

                    <div className="offset-sm-1 col-sm-6">
                        <p>This creates more variation for use in communications out of the same three patterns.</p>
                        <p>Minimum percentage is 100%<br/>
                            Maximum scaling is 300%</p>
                    </div>
                </Anim>
                <Anim className="row">
                    <div className="col-sm-12 text-center mt-5">
                        <img className="crop-image mr-lg-5" src={require('../../../images/graphic/Graphic_Language_Crops_01.png')} />
                        <img className="crop-image mr-lg-5 ml-lg-5" src={require('../../../images/graphic/Graphic_Language_Crops_02.png')} />
                        <img className="crop-image ml-lg-5" src={require('../../../images/graphic/Graphic_Language_Crops_03.png')} />
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default GraphicLanguageCrops;
