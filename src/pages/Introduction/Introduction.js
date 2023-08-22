import React from 'react';
import IntroductionIntro from './sections/IntroductionIntro.js';
import IntroductionHowTo from './sections/IntroductionHowTo.js';
import IntroductionPurpose from './sections/IntroductionPurpose.js';
import IntroductionVision from './sections/IntroductionVision.js';
import IntroductionOperate from './sections/IntroductionOperate.js';
import IntroductionValues from './sections/IntroductionValues.js';
import IntroductionVideo from './sections/IntroductionVideo.js';

import './Introduction.scss';


const Introduction = () => (
    <div className="introduction-container">
        <IntroductionIntro/>
        <IntroductionHowTo/>
        <IntroductionPurpose/>
        <IntroductionVision/>
        <IntroductionOperate/>
        <IntroductionValues/>
        <IntroductionVideo/>
    </div>
);

export default Introduction;
