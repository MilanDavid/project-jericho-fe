import React from 'react';
import Asset from '~/components/Asset/Asset.js';
import Anim from '~/components/Anim/Anim.js';

const TypographyWeights = React.memo(() => (
    <div className="typography-weights">
        <div className="dark-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-4">
                        <h1 className="display-2">
                            Type Weights<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3 text-highlight">
                            Radikal’s number of weights allow us to express both contemporary and elegant qualities.
                        </p>
                        <p> To ensure a correct amount of variationin our main communications we use a variety of the
                            following weights:
                        </p>
                        <p>Thin, Light, Regular and Medium.
                        </p>
                        <p>Always use a weight that best suits the message and format.
                        </p>
                    </div>
                    <div className="offset-sm-2 col-sm-6">
                        <Asset intKey="Typography_Weights_FontFiles">
                            <div className="font-download-preview">
                                <p className="thin">Thin</p>
                                <p className="light">Light</p>
                                <p className="regular">Regular</p>
                                <p className="medium">Medium</p>
                            </div>
                        </Asset>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographyWeights;
