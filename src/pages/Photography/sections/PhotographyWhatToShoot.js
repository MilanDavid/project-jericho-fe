import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

class PhotographyWhatToShoot extends React.Component {

    constructor(props) {
        super(props);

        this.examples = {
            course: {
                title: 'The Course',
                images: [
                    require('../../../images/photography/photography_whatToShoot_01.jpg')
                ]
            }
        };

        this.order = ['course', 'teeOff', 'crowd', 'lineUp', 'win', 'loss', 'scewed'];

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
            <div>
                <div className="container big-spacing">
                    <Anim className="row">
                        <div className="col-sm-5">
                            <h2 className="display-2">
                                What to shoot: Imagery Content<span className="text-highlight">.</span>
                            </h2>
                            <p className="display-3">The images here are representative of the stages of the game that
                                make up
                                our branded story of {"golf's"} drama, experience and player-to-fan experience.</p>
                        </div>

                        <div className="col-sm-6 offset-sm-1">
                            <p>Any photography used to communicate our brand should aim to showcase these stages of the
                                game.
                                All images should be styled in a way that creates brand ownership and togetherness, this
                                is
                                expressed on the following pages.</p>
                            <p>Key aspects of the game that we should focus on to showcase Golf:</p>
                            {/* Placeholder text until images are ready */}
                            <div className="row">
                                <div className="col-sm-6 list">
                                    <p>- The Players</p>
                                    <p>- The Fans</p>
                                    <p>- The Excitement</p>
                                    <p>- The Passion</p>
                                    <p>- The Course</p>
                                </div>
                                <div className="col-sm-6 list">
                                    <p>- The Tee Off</p>
                                    <p>- The Line Up</p>
                                    <p>- The Win</p>
                                    <p>- The Loss</p>
                                    <p>- The Skewed Shot</p>
                                </div>
                            </div>
                            {/* Saved for when images are ready to be populated
                            {this.order.map((pillarKey) => {
                                const pillar = this.examples[pillarKey];
                                return (
                                    <button
                                        className={classNames('btn mb-3 mr-3 btn-outline-primary', {'active': this.state.activePillar === pillarKey})}
                                        key={pillarKey}
                                        onClick={this.selectPillar.bind(null, pillarKey)}>
                                        {pillar.title}
                                    </button>
                                );
                            })}
                            */}
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

export default PhotographyWhatToShoot;
