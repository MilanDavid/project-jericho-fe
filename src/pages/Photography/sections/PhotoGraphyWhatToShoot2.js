import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';
import classNames from 'classnames';

class PhotoGraphyWhatToShoot2 extends React.Component {

    constructor(props) {
        super(props);

        this.examples = {
            authentic: {
                title: 'Authentic',
                images: [
                    require('../../../images/ra/imagery_content_1.jpg'),
                    require('../../../images/ra/imagery_content_1.jpg'),
                    require('../../../images/ra/imagery_content_1.jpg')
                ]
            }
        };

        this.order = ['authentic', 'striking', 'raw', 'natural', 'dramatic'];

        this.state = {
            activePillar: this.order[0]
        };
    }

    selectPillar = (pillar) => {
        this.setState(() => ({
            activePillar: pillar
        }));
    }

    render() {
        return (
            <div className="dark-section pb-0">
                <div className="container big-spacing">
                    <Anim className="row">
                        <div className="col-sm-5">
                            <h2 className="display-2">
                                How to shoot:<br/> Art Direction<span className="text-highlight">.</span>
                            </h2>
                            <p className="display-3 text-highlight">This collection of images demonstrates the
                                aspiration for
                                the art direction of our photography moving forward.</p>
                        </div>

                        <div className="col-sm-6 offset-sm-1">
                            <p>Our photography is inspired by the natural beauty of a golf course which helps us to
                                define a
                                photography style that’s ownable for The R&A.</p>
                            <p>Although our photography will show a diverse range of people and locations they should be
                                commonly united by the following key principles:</p>
                            {/* Placeholder list until images are ready */}
                            <div className="list">
                                <div className="col-sm-6">
                                <p>- Authentic</p>
                                <p>- Striking</p>
                                <p>- Raw</p>
                                <p>- Natural</p>
                                <p>- Dramatic</p>
                                </div>
                            </div>

                            {/* commented out until images are ready
                            {this.order.map((pillarKey) => {
                                const pillar = this.examples[pillarKey];
                                return (
                                    <button
                                        className={classNames('btn mb-3 mr-3 btn-outline-light', {'active': this.state.activePillar === pillarKey})}
                                        key={pillarKey}
                                        onClick={this.selectPillar.bind(null, pillarKey)}>
                                        {pillar.title}
                                    </button>
                                );
                            })}*/}
                        </div>
                    </Anim>
                </div>

                <Carousel
                    hideArrows
                    hideBullets
                    className="large-carousel"
                >
                    {this.examples[this.state.activePillar].images.map((ex) => <img key={ex} className="w-100"
                                                                                    src={ex}/>)}
                </Carousel>
            </div>);
    }
}

export default PhotoGraphyWhatToShoot2;
