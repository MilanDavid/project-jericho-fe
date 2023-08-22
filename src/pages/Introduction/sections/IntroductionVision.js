import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const IntroductionVision = React.memo(() => (
    <div className="introduction-divided">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 dark-section vision-illustration"/>
                <div className="offset-sm-6 col-sm-6 d-flex justify-content-center align-items-end flex-column">
                    <Anim className="introduction-divided-content">
                        <h2 className="display-2">
                            Vision<span className="text-highlight">.</span>
                        </h2>
                        <p className="display-3">
                            We lead by example – a global organisation moving golf forward collaboratively
                        </p>
                        <p>We are building a future where The R&A is internationally renowned for both our governance
                            work and our world class amateur and professional championships.</p>
                        <p>Our aim is to become financially stronger so we can invest more in developing golf
                            worldwide. </p>
                        <p>To ensure that golf is thriving 50 years from now.</p>
                    </Anim>
                </div>
            </div>
        </div>
    </div>
));

export default IntroductionVision;
