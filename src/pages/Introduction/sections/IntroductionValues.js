import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

const slides = [
    {
        text: 'We believe in doing the right thing, earning the trust of the people we work with, playing by the rules and always acting fairly and equally.',
        image: require('../../../images/intro/integrity.svg'),
        imageAlt: 'Integrity',
        backgroundColor: '#39ffc4'
    },
    {
        text: 'We stand up for what is right, acting in the best interests of the sport, overcoming obstacles and being bold in heading the sport for today and for future generations.',
        image: require('../../../images/intro/courage.svg'),
        imageAlt: 'Courage',
        backgroundColor: '#A693FF'
    },
    {
        text: 'We are committed to growing the sport through greater inclusivity and diversity. Golf is for everyone and we are working towards a future where it is more accessible, enjoyable and appealing.',
        image: require('../../../images/intro/inclusivity.svg'),
        imageAlt: 'Inclusivity',
        backgroundColor: '#FF5836'
    }
];

class IntroductionValues extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {

        if (window.innerWidth > 1170) {
            this.setState({height: window.innerHeight});
        } else {
            this.setState({height: 0});
        }
    }

    render() {
        return (
            <div className="introduction-values">
                <Carousel hideBullets>
                    {slides.map((slide, key) => (
                        <div key={key} className="introduction-slide"
                             style={{
                                 height: this.state.height ? this.state.height - 54 : 520,
                                 backgroundColor: slide.backgroundColor
                             }}>
                            <div className="container">
                                <div className="row pt-5">
                                    <div className="col-12">
                                        <h2 className="introduction-slide-title display-2">Our values.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="center-vertical">
                                <div className="container pb-5">
                                    <Anim className="row">
                                        <div className="col-12">
                                            <img
                                                className="introduction-slide-img mb-5"
                                                src={slide.image}
                                                alt={slide.imageAlt}
                                            />
                                            <p className="introduction-slide-text">{slide.text}</p>
                                        </div>
                                    </Anim>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default IntroductionValues;
