import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import ReactCompareImage from 'react-compare-image';

const PhotographyTone = React.memo(() => (
    <div className="container big-spacing">
        <Anim className="row">
            <div className="col-sm-6">
                <ReactCompareImage
                    hover
                    leftImage={require('../../../images/photography/Photography_Tone_Slider_01.png')}
                    rightImage={require('../../../images/photography/Photography_Tone_Slider_02.png')}/>
            </div>

            <div className="col-sm-5 offset-sm-1 pt-4 pt-sm-0">
                <h2 className="display-2">
                    Tone<span className="text-highlight">.</span>
                </h2>
                <h3 className="display-3">Principles</h3>

                <p className="font-weight-bold mb-0">Depth of field</p>
                <p>Adding depth to field to the image creates a focus and gives perspective to the image.</p>

                <p className="font-weight-bold mb-0">Lighting</p>
                <p>Make sure there is a good contrast and balance in the image. Sun drenched images look fake and over
                    edited. Long shadows add dimension to your images. The {'\''}golden{'\''} hour just after sunrise or
                    just before sunset creates the perfect balance of natural light.</p>

                <p className="font-weight-bold mb-0">Colour</p>
                <p>Ensure the image is not too dull, but also on the other hand is not over saturated. It should look as
                    natural as possible.</p>

                <p className="font-weight-bold mb-0">Authentic</p>
                <p>The people in the composition should not look staged, but feel relaxed and natural.</p>
            </div>
        </Anim>
    </div>
));

export default PhotographyTone;
