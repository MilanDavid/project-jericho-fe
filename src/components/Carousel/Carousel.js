import React from 'react';
import NukaCarousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextIcon from '~/components/Icons/NextIcon.js';
import '~/components/Carousel/Carousel.scss';

class Carousel extends React.Component {


    /**
     * Lifecycle
     */

    componentDidMount() {
        setTimeout(()=>{
            // Hack implemented because carousel calculates the wrong height
            // when switching pages
            try {
                this.$carousel.setDimensions(null);
            } catch (err) {
                // Err
            }
        }, 100);
    }

    /**
     * Render
     */

    getBullets = ({ slideCount, goToSlide, currentSlide }) => {

        if (this.props.hideBullets) {
            return;
        }

        return (
            <div>
                {new Array(slideCount).fill('bullet').map((val, id)=>(
                    <button
                        key={`carousel-counter-${id}`}
                        className={classNames("carousel-bullet", {"carousel-bullet--active": id === currentSlide, "carousel-bullet--light": this.props.lightBullets})}
                        onClick={goToSlide.bind(null, id)}
                    />
                ))}
            </div>
        );
    }

    getLeftArrow = ({ previousSlide, currentSlide, }) => {

        let notClickable = currentSlide === 0;

        if (this.props.hideArrows || (notClickable && !this.props.showFistLastArrow)) {
            // first slide, so don't show the button (or arrows disabled)
            return null;
        }

        return (
            <button onClick={previousSlide} className={classNames("carousel-btn carousel-btn--prev", {'disabled': notClickable})}>
                <NextIcon disabled={notClickable} lightMode={this.props.lightArrows} />
            </button>
        );
    }

    getRightArrow = ({ nextSlide, slideCount, currentSlide }) => {

        let notClickable = currentSlide >= slideCount-1;

        if (this.props.hideArrows || (notClickable && !this.props.showFistLastArrow)) {
            // Last slide, so don't show the button (or arrows disabled)
            return null;
        }

        return (
            <button onClick={nextSlide} className={classNames("carousel-btn carousel-btn--next", {'disabled': notClickable})}>
                <NextIcon disabled={notClickable} lightMode={this.props.lightArrows} />
            </button>
        );
    }

    render() {
        const {
            className = '',
            showSuroundingSlides = false
        } = this.props;

        let carouselClass = className;

        if (showSuroundingSlides) {
            carouselClass += ' carousel-surounding';
        }

        return (
            <div>
                <NukaCarousel
                    dragging={false}
                    className={carouselClass}
                    ref={r=>this.$carousel=r}
                    heightMode={'first'}
                    renderBottomCenterControls={this.getBullets}
                    renderCenterLeftControls={this.getLeftArrow}
                    renderCenterRightControls={this.getRightArrow}
                >
                    {this.props.children}
                </NukaCarousel>
            </div>
        );
    }
}

Carousel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hideArrows: PropTypes.bool,
    hideBullets: PropTypes.bool,
    lightArrows: PropTypes.bool,
    lightBullets: PropTypes.bool,
    showFistLastArrow: PropTypes.bool,
    showSuroundingSlides: PropTypes.bool
};


export default Carousel;
