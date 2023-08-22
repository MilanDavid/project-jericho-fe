import React from 'react';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';

const IntroductionVideo = React.memo(() => (
    <div className="introduction-video">
        <VideoAnim src={require('../../../images/intro/statistics.mp4')} />
    </div>
));

export default IntroductionVideo;
