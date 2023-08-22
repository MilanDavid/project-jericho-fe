import React from 'react';
import PropTypes from 'prop-types';
import OnVisible from 'react-on-visible';
import {Player, ControlBar, BigPlayButton} from 'video-react';

class VideoAnim extends React.Component {

    onChange(isVisible) {
        if (isVisible) {
            this.video.play();
        }
    }

    render() {

        return (
            <div className="video-anim">
                <OnVisible bounce={true} onChange={this.onChange.bind(this)}>
                    <Player
                        ref={video => this.video = video}
                        playsInline
                        muted={true}
                        loop={this.props.loop}
                        src={this.props.src}
                    >
                        <ControlBar disableCompletely={true}/>
                        <BigPlayButton position="none" />
                    </Player>
                </OnVisible>
            </div>
        );
    }
}


VideoAnim.propTypes = {
    src: PropTypes.string,
    loop: PropTypes.bool
};

export default VideoAnim;
