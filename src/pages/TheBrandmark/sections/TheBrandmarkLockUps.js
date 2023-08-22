import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

const examples = [
    require('../../../images/ra/brandmark_lockups_example_1.png'),
    require('../../../images/ra/brandmark_lockups_example.png'),
    require('../../../images/ra/brandmark_lockups_example_1.png')
];

const TheBrandmarkLockups = React.memo(()=>(
    <div className="grey-section">
        <div className="container big-spacing">
            <div className="row">
                <Anim className="col-sm-3">
                    <h2 className="display-2">Lock-Ups<span className="text-highlight">.</span></h2>
                    <p className="display-3">When grouping the R&A logo with other brand logos to create lock-ups, the following rules should be applied:</p>
                    <ul className="styled-list">
                        <li>Ensure the minimum clear space rules are implemented</li>
                        <li>The other logos should be in proportion to the R&A logo, and should not dominate the R&A logo</li>
                    </ul>
                    <p>See examples</p>
                </Anim>

                <div className="col-sm-8 offset-sm-1">
                    <img
                        className="w-75 mx-auto d-block"
                        src={require('../../../images/ra/brandmark_lockups_example.png')}
                        alt="Lock-Ups Example"
                    />

                    <Carousel
                        className="brandmark-lockup-carousel"
                        hideArrows
                    >
                        {examples.map((ex, id)=>(
                            <div className="brandmark-lockup-carousel-item" key={`${ex}-${id}`}>
                                <p>Example {id+1}</p>
                                <img
                                    className="w-75 d-block mx-auto"
                                    src={ex}
                                    alt={`Lock-Up Example ${id+1}`}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
));

export default TheBrandmarkLockups;
