import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';

const ColourTertiary = React.memo(() => (
    <div className="container big-spacing">
        <div className="row">
            <Anim className="col-sm-4">
                <h2 className="display-2">
                    Tertiary Palette<span className="text-highlight">.</span>
                </h2>
                <p className="display-3">R&A colours are to be set in 100% solid. However, in some circumstances where a
                    wider range of colours are needed, tints of R&A Grey may be available.</p>
                <p>These should be used in charts and tables to differentiate the hierarchy of information. The
                    selection of tints must be carefully handled to avoid colours with limited value that will be
                    inappropriate in print.</p>
            </Anim>

            <div className="col-sm-7 offset-sm-1">
                <VideoAnim src={require('../../../images/color/palette.mp4')}/>
            </div>
        </div>
    </div>
));

export default ColourTertiary;
