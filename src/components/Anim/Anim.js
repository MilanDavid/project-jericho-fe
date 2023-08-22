import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

class Anim extends React.Component {

    render() {

        return (
            <ScrollAnimation
                animateIn="fadeInUpDam"
                duration={0.5}
                delay={0}
                animateOnce={true}
                className={this.props.className}>
                {this.props.children}
            </ScrollAnimation>
        );
    }
}

Anim.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Anim;
