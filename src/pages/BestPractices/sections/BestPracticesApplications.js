import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import Carousel from '~/components/Carousel/Carousel.js';



class BestPracticesApplications extends React.Component {

    /**
     * Render
     */

    render() {
        return (
            <div>
                <div className="container">
                    <Anim className="row mt-4">
                        <div className="col-sm-12">
                            <h2 className="display-2">
                                Applications<span className="text-highlight">.</span>
                            </h2>
                        </div>
                    </Anim>
                </div>
                <Anim>
                    <img className="w-100" src={require('../../../images/practices/bus-stop.jpg')} />
                </Anim>
                <div className="container my-5">
                    <Anim>
                        <Carousel hideArrows>
                            <img className="w-100" src={require('../../../images/practices/carousel-1.jpg')} />
                            <img className="w-100" src={require('../../../images/practices/carousel-2.jpg')} />
                            <img className="w-100" src={require('../../../images/practices/carousel-3.png')} />
                            <img className="w-100" src={require('../../../images/practices/carousel-4.jpg')} />
                            <img className="w-100" src={require('../../../images/practices/carousel-5.jpg')} />
                        </Carousel>
                    </Anim>
                </div>
                <div className="grey-section">
                    <Anim>
                        <div className="container my-5">
                            <img className="w-100" src={require('../../../images/practices/socials.jpg')} />
                        </div>
                    </Anim>
                </div>
                <Anim>
                    <img className="w-100" src={require('../../../images/practices/advertisement.jpg')} />
                </Anim>
            </div>
        );
    }
}

export default BestPracticesApplications;
