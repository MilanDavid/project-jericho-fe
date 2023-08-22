import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const ColourPrimaryPalette = React.memo(()=>(
    <div className="grey-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <h2 className="display-2">
                        Primary Palette<span className="text-highlight">.</span>
                    </h2>
                    <p className="display-3">R&A Blue is our main brand colour and conveys the strength and integrity of the organisation.</p>
                </div>
                <div className="col-sm-5 offset-sm-1">
                    <p>White is an integral element in our graphic communications and its application is encouraged. Creating areas of white space around elements in a design focuses attention and emphasises hierarchy.</p>
                    <p>It is important to match any colour application to the R&A Blue to ensure  brand consistency and continuity. No other alternatives are acceptable.</p>
                </div>
            </Anim>

            <Anim className="row pt-4 pt-sm-5">
                <div className="col-6 pr-0">
                    <div className="primary-palette primary-palette--blue">
                        <h3 className="primary-palette-title">Blue</h3>
                        <p className="primary-palette-info">
                            RGB 004 030 066<br/>
                            CMYK 100 90 30 55<br/>
                            HEX 041E42<br/>
                            Pantone 282 C
                        </p>
                    </div>
                </div>
                <div className="col-6 pl-0">
                    <div className="primary-palette">
                        <h3 className="primary-palette-title">White</h3>
                        <p className="primary-palette-info">
                            RGB 255 255 255<br/>
                            CMYK 00 00 00 00<br/>
                            HEX FFFFFF
                        </p>
                    </div>
                </div>
            </Anim>
        </div>
    </div>
));

export default ColourPrimaryPalette;
