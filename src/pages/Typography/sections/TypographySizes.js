import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

const typeSize = [
    {
        'title': 'Radikal Regular',
        'sub': '90pt/112pt (Tracking 15)',
        'class': 'font-size-112'
    },
    {
        'title': 'Radikal Regular',
        'sub': '68pt/84pt (Tracking 15)',
        'class': 'font-size-84'
    },
    {
        'title': 'Radikal Regular',
        'sub': '54pt/68pt (Tracking 15)',
        'class': 'font-size-68'
    },
    {
        'title': 'Radikal Regular',
        'sub': '24pt/30pt (Tracking 15)',
        'class': 'font-size-30'
    },
    {
        'title': 'Radikal Regular',
        'sub': '16pt/20pt (Tracking 15)',
        'class': 'font-size-20'
    },
    {
        'title': 'Radikal Regular',
        'sub': '14pt/18pt (Tracking 15)',
        'class': 'font-size-18'
    },
    {
        'title': 'Radikal Regular',
        'sub': '10pt/13pt (Tracking 15)',
        'class': 'font-size-13'
    },
    {
        'title': 'Radikal Regular',
        'sub': '9pt/12pt (Tracking 15)',
        'class': 'font-size-12'
    },
];

const TypographySizes = React.memo(() => (
    <div className="typography-sizes">
        <div className="white-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-5">
                        <Carousel
                            className="carousel"
                            lightBullets
                            hideArrows>
                            {typeSize.map((size, key) => (
                                <div key={key}>
                                    <div className="panel panel-default panel-carousel dark">
                                        <div className="panel-heading text-primary">
                                            <span className="font-weight-bold">{size.title}</span>
                                            <div className="float-right">{size.sub}</div>
                                        </div>
                                        <div className="panel-body">
                                            <div className={`font-display ${size.class}`}>
                                                XxYy<br/>
                                                AaBd
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="offset-sm-1 col-sm-6">
                        <h1 className="display-2">
                            Type Sizes<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3">
                            Type size is always chosen based upon format, function and purpose.
                        </p>
                        <p> To keep things consistent and simple within our communications we use some pre-defined type
                            sizes and leading. This ensures a level of consistency, legibility
                            and suitability for selected formats.
                        </p>
                        <p>We should try to use only three type sizes per communication this keeps a simple contrast and
                            hierarchy.
                        </p>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographySizes;
