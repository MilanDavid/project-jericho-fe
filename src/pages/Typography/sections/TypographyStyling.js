import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';


const slides = [
    require('../../../images/typography/styling_1.svg'),
    require('../../../images/typography/styling_2.svg'),
    require('../../../images/typography/styling_3.svg'),
    require('../../../images/typography/styling_4.svg'),
    require('../../../images/typography/styling_5.svg'),
];

const TypographyStyling = React.memo(() => (
    <div className="typography-styling">
        <div className="dark-section big-spacing">
            <div className="container">
                <Anim className="row">
                    <div className="col-sm-5">
                        <h1 className="display-2">
                            Styling<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3 text-highlight">
                            To create dynamic and expressive messaging within our typography we use outlined styling for
                            supporting titles.
                        </p>

                        <Carousel
                            className="carousel typography-styling-carousel"
                            lightBullets
                            hideArrows>
                            {slides.map(url=>(
                                <img
                                    key={url}
                                    className="img-fluid mt-3"
                                    src={url}
                                />
                            ))}
                        </Carousel>

                    </div>
                    <div className="col-sm-6 offset-sm-1">
                        <p>This added contrast creates a simple way to navigate information and
                            furthers our typographic hierarchy.</p>
                        <p>Outlined type should only be used in Regular and Medium. The type weight used should follow
                            the weight of the main title, for example Medium and Medium.
                        </p>
                        <p>The stroke width for all outlined titles should be 1.5% of the type
                            size, for example a 62pt title will have a 0.93 stroke width.
                            The minimum size for outlined type is 32pt.</p>
                        <p>Note:

                            The outlined type and full point can be used in any of the five colours from our colour
                            palette, to correspond with the subject matter.
                        </p>
                        <p>For example, if creating a campaign based around the Championships,
                            then the Championship colour (lilac) should be used.</p>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographyStyling;
