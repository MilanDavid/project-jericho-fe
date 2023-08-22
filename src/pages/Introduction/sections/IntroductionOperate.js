import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const IntroductionOperate = React.memo(() => (
    <div className="introduction-divided how-we-operate">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 d-flex justify-content-center flex-column">
                    <Anim className="introduction-divided-content">
                        <h2 className="display-2">
                            How we operate<span className="text-highlight">.</span>
                        </h2>
                        <p className="display-3">
                            To lead the future of the sport in a spirit of collaboration, with courage, integrity and
                            inclusivity.
                        </p>
                        <p>We have a duty of care to do what is right, not what is easy, upholding the traditions of
                            golf, embracing change and breaking down barriers to progress.</p>
                    </Anim>
                </div>
                <div className="col-sm-6 dark-section operate-illustration"/>
            </div>
        </div>
    </div>
));

export default IntroductionOperate;
