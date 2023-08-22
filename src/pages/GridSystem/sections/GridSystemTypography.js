import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

const GridSystemTypography = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <h2 className="display-2">
                        Our Grid &amp; Typography<span className="text-highlight">.</span>
                    </h2>

                    <p className="display-3 text-highlight">
                        The grid has been designed to allow for expressive flexibility across all marketing materials
                        from functional graphics, editorial and dynamic layouts for impactful communications.
                    </p>

                    <p>Offsetting and scaling graphic and typographic elements help to create dynamic layouts that draw
                        attention
                        to the content and build a clear hierarchy around the page.</p>

                    <p>Space is a key element within our layouts, messaging should always be clear and simple. Whether
                        the content is impactful or subtle the amount of space around it, is what makes them stand out.
                    </p>

                    <p>The content and format should always define the overall typesize and look of the intended
                        content. To ensure
                        readability in any format the line length for body copy should be no shorter than 40 characters
                        and no longer than 70 based on the type size this should inform the column width of any text
                        box.</p>
                </div>

                <div className="offset-sm-1 col-sm-6">
                    <Carousel
                        hideBullets
                        showSuroundingSlides>
                        <img className="img-fluid" src={require('../../../images/grid/Grid_Our_Grid_01.svg')}/>
                        <img className="img-fluid" src={require('../../../images/grid/Grid_Our_Grid_02.svg')}/>
                    </Carousel>
                </div>
            </Anim>
        </div>
    </div>
));

export default GridSystemTypography;
