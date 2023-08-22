import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';

const TheBrandmarkExclusion = React.memo(()=>(
    <div className="container big-spacing">
        <div className="row">
            <Anim className="col-md-5">
                <h2 className="display-2">
                    Exclusion Zone<span className="text-highlight">.</span>
                </h2>
                <p className="display-3">
                    To protect the clarity and visual integrity of our brandmark, it has an exclusion zone. This ensures visual impact of the brandmark and isolates it from elements such as text and supporting graphics. It must always appear legibly on a clear background.
                </p>
                <p>Exclusion zone can be determined by using the measurement of the width of the letter R from our brandmark. This zone is the absolute minimum space allowed, in most cases the brandmark should be given more room to breathe.</p>
            </Anim>
            <div className="offset-md-1 col-md-6">
                <VideoAnim src={require('../../../images/brandmark/logo.mp4')} loop />
            </div>
        </div>
    </div>
));

export default TheBrandmarkExclusion;
