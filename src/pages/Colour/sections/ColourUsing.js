import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

const slides = [
    {
        image: require('../../../images/color/Colour_Using_Colour_Carousel_01.svg'),
    },
    {
        image: require('../../../images/color/Colour_Using_Colour_Carousel_02.svg'),
    },
    {
        image: require('../../../images/color/Colour_Using_Colour_Carousel_03.svg'),
    },
    {
        image: require('../../../images/color/Colour_Using_Colour_Carousel_04.svg'),
    },
    {
        image: require('../../../images/color/Colour_Using_Colour_Carousel_05.svg'),
    },
    {
        image: require('../../../images/color/Colour_Using_Colour_Carousel_06.svg'),
    },
];


const ColourUsing = React.memo(() => (
    <div className="container big-spacing">
        <Anim className="row">
            <div className="col-sm-5">
                <h2 className="display-2">
                    Using Colour<span className="text-highlight">.</span>
                </h2>
                <p className="display-3">When using colour we use a combination of the main brand palette and secondary
                    palette. These combinations reflect our strategic pillars, this is as follows:</p>
            </div>
            <div className="col-sm-6 offset-sm-1">
                <p>Combining the use of one and only one secondary colour with either the R&A blue or white creates a
                    dramatic contrast and energy to bring our communications to life.</p>
                <p>We use the palette in the following amounts as a general rule:</p>
                <p>
                    R&A Blue or White 70%<br/>
                    Key Accent Colour 30%
                </p>
                <p>This percentage across literature can flex to add a varied pace, making communications feel lively
                    rather than monotonous.</p>
            </div>
        </Anim>

        <Anim className="row">
            <div className="col-12">
                <div className="colour-using-gallery mt-5">
                    <Carousel
                        hideBullets
                        showSuroundingSlides
                        lightArrows
                        className="using-gallery"
                    >
                        {slides.map((slide, key) => (
                            <div key={key}>
                                <img src={slide.image} alt={slide.text}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </Anim>
    </div>
));

export default ColourUsing;
