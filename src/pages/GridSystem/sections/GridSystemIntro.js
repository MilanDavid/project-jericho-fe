import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import VideoAnim from '~/components/VideoAnim/VideoAnim.js';

const GridSystemIntro = React.memo(() => (
    <div className="grid-intro">
        <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/grid_hero.jpg') + ")"}} />
        <div className="dark-section">
            <div className="container">
                <Anim className="row mt-4">
                    <div className="col-sm-12">
                        <h1 className="display-1">
                            Grid System<span className="text-highlight">.</span>
                        </h1>
                    </div>
                </Anim>
            </div>
        </div>
        <div className="grey-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-5">
                        <VideoAnim src={require('../../../images/grid/system.mp4')}  />
                    </div>

                    <div className="offset-sm-1 col-sm-6">
                        <p className="display-3">
                            Our grid system helps to maintain a consistent visual identity for The R&amp;A. Creating a
                            structural foundation for any design layout.
                        </p>
                        <p> A communications format should always be defined by the overall size and nature of the
                            intended content.
                        </p>
                        <p><strong>Size one</strong><br/>
                            The interior grid area defines the boundaries in which graphic elements are contained.
                            Photography and pattern are the only elements that can breach
                            this area and sit full bleed.</p>
                        <p><strong>Size two</strong><br/>
                            Our main underlying column grid gives the basis for setting type in vertical columns. For
                            example an A4 portrait format provides a maximum of 12 vertical columns.
                        </p>
                        <p>Using this grid system ensures we maintain a strong visual link between each produced piece
                            of communication. It creates harmony between all the
                            elements on the page according to the needs of that specific communication.</p>
                    </div>

                </Anim>
            </div>
        </div>
    </div>
));

export default GridSystemIntro;
