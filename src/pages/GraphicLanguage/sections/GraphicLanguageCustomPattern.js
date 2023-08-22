import React from 'react';
import ScrollBox from '~/components/ScrollBox/ScrollBox.js';
import {withRouter} from 'react-router-dom';
import Anim from '~/components/Anim/Anim.js';

class GraphicLanguageCustomPattern extends React.Component {


    constructor(props) {

        super(props);

        this.slides = [
            {
                image: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Carousel_01.png'),
                lines: [
                    'Determine the path of the flow. This should follow',
                    'the undulating hills of the golf course, if present.',
                    'Create one along this chosen path.',
                ]
            },
            {
                image: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Carousel_02.png'),
                lines: [
                    'Create another line, a similar path either above',
                    'or below, which is thinner than the first line.',
                ]
            },
            {
                image: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Carousel_03.png'),
                lines: [
                    'Use the blend tool to create specified steps. Usually around',
                    '12-15 is a good number.',
                ]
            },
            {
                image: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Carousel_04.png'),
                lines: [
                    'Next, expand the lines, and make the line weights got from',
                    'thick to thin from left to right. To do this use the Stroke',
                    'Profile tool and use the preset option "Width profile 4".',
                ]
            },
            {
                image: require('../../../images/graphic/Graphic_Language_Custom_Pattern_Carousel_05.png'),
                lines: [
                    'Finally, mask around the golfer, so that the graphic pattern',
                    'seams to flow around the and behind the golfer.',
                ]
            },
        ];
    }

    render() {

        return (
            <div className="graphic-language-custom-patterns">
                <div className="white-section">
                    <div className="container big-spacing">

                        <Anim className="row pb-5">
                            <div className="col-sm-5">
                                <h2 className="display-2">
                                    Custom Pattern: <br/>Selecting the image<span className="text-highlight">.</span>
                                </h2>
                            </div>
                            <div className="offset-sm-1 col-sm-5">
                                <p className="display-3">
                                    When selecting the photography to use with the flowing graphic language these
                                    recommendations should be considered.
                                </p>
                            </div>
                        </Anim>

                        <Anim className="row">
                            <div className="col-sm-5">
                                <p>It should:</p>
                                <ul className="styled-list">
                                    <li>Be a simple composition</li>
                                    <li>Have a clear background and golfer in the foreground</li>
                                    <li>If possible, include undulating hills</li>
                                </ul>
                                <img className="img-fluid mt-3 d-sm-none" src={require('../../../images/graphic/should.jpg')} />

                            </div>
                            <div className="offset-sm-1 col-sm-5">
                                <p>It should not:</p>
                                <ul className="styled-list">
                                    <li>Be too complicated to mask around the golfer</li>
                                    <li>Include supporters or anything else that is in clear focus in the background
                                    </li>
                                </ul>
                                <img className="img-fluid mt-3 d-sm-none" src={require('../../../images/graphic/should_not.jpg')}/>
                            </div>
                        </Anim>

                        <Anim className="row d-xs-none d-sm-flex">
                            <div className="col-sm-5">
                                <img className="img-fluid mt-3" src={require('../../../images/graphic/should.jpg')} />
                                <div className="divider"></div>
                            </div>
                            <div className="offset-sm-1 col-sm-5">
                                <img className="img-fluid mt-3" src={require('../../../images/graphic/should_not.jpg')} />
                            </div>
                        </Anim>
                    </div>
                </div>
                <div className="grey-section">
                    <div className="container big-spacing">
                        <Anim className="row pb-5">
                            <div className="col-sm-5">
                                <h2 className="display-2">
                                    Custom Pattern: <br/>Selecting the image<span className="text-highlight">.</span>
                                </h2>
                            </div>

                            <div className="offset-sm-1 col-sm-6">
                                <p className="display-3">
                                    Follow this simple step by step guide to create the custom pattern for use within
                                    photography.
                                </p>
                                <p className="display-3">
                                    Adobe Illustrator is the application that is referenced and should be used to create
                                    the
                                    pattern.
                                </p>
                            </div>
                        </Anim>
                        <Anim className="row">
                            <div className="col-sm-12 mt-3">
                                <ScrollBox>
                                    <div className="photo-examples">
                                        {this.slides.map((slide, key) => (
                                            <div key={key} className="photo-examples-item">
                                                <img className="img-fluid" src={slide.image}/>

                                                <p>
                                                    <div className="font-weight-bold mt-1">{key + 1}.</div>
                                                    {slide.lines.map((line, key) => (
                                                        <div key={key}>{line}</div>
                                                    ))}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollBox>
                            </div>
                        </Anim>
                    </div>
                </div>
            </div>

        );

    }
}

export default withRouter(GraphicLanguageCustomPattern);
