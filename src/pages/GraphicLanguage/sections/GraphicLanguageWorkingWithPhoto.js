import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const GraphicLanguageWorkingWithPhoto = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <img className="img-fluid" src={require('../../../images/graphic/working.png')} />
                </div>
                <div className="offset-sm-1 col-sm-5">
                    <h2 className="display-2">
                        Working into photography<span className="text-highlight">.</span>
                    </h2>
                    <p className="display-3 text-highlight">
                        To create seamless integration within our photography we allow a level of customisation to the
                        graphic language.
                    </p>
                    <p>It is important that the graphic language works with the chosen image, so we have created a step
                        by step guide
                        to show how to create this.</p>
                    <p className="font-weight-bold m-0">Note:</p>
                    <p>
                        This is only for use within our photography.</p>

                    <p>The images here are shown as best practice examples and are for reference only. They should act
                        as a starting point when commissioning photography to create our own brand image bank, but
                        should not be directly used in any brand collateral.
                    </p>
                    <p>The R&amp;A do not own the rights to these images.</p>
                </div>
            </Anim>
        </div>
    </div>
));

export default GraphicLanguageWorkingWithPhoto;
