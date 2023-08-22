import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

const TypographySpacing = React.memo(() => (
    <div className="typography-spacing">
        <div className="white-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-5">
                        <h1 className="display-2">
                            Letter Spacing<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3">
                            Spacing between letters contribute to the visual appeal and legibility of text. Adjusting
                            the
                            letter spacing may apply to pairs of letters or entire blocks.
                        </p>
                    </div>
                    <div className="offset-sm-1 col-sm-6">
                        <p> Only affect letter spacing if it improves readability. For headlines some pairs of letters
                            create awkward spaces, so the space needs adjusting. The expanding and condensing of the
                            space
                            between letters is referred to as kerning.
                        </p>
                        <p>Kerning for headlines and large format print should always be done manually to ensure even
                            spacing between every character.
                            The examples shown are only a guide and adjustments should be made per format and
                            function.</p>
                        <p>Tracking is the adjustment of a block of text. You use it to make text more open or dense.
                            Specific tracking values are used per weight and point size.
                        </p>
                    </div>
                </Anim>
            </div>
        </div>
        <div className="grey-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-12">
                        <Carousel
                            hideArrows>
                            <div className="spacing-carousel-item" key="1">
                                <img className="img-fluid"
                                     src={require('../../../images/typography/Typography_LetterSpacing_01_Thin.png')} />
                                <div className="note">
                                    <p>Tracking value 15<br/>
                                        Manual Kerning Values</p>
                                    <p className="font-weight-bold">Radikal Thin 96 pt</p>
                                </div>
                            </div>
                            <div className="spacing-carousel-item" key="2">
                                <img className="img-fluid"
                                     src={require('../../../images/typography/Typography_LetterSpacing_02_Light.png')} />
                                <div className="note">
                                    <p>Tracking value 15<br/>
                                        Manual Kerning Values</p>
                                    <p className="font-weight-bold">Radikal Light 96 pt</p>
                                </div>
                            </div>
                            <div className="spacing-carousel-item" key="3">
                                <img className="img-fluid"
                                     src={require('../../../images/typography/Typography_LetterSpacing_04_Regular.png')} />
                                <div className="note">
                                    <p>Tracking value 15<br/>
                                        Manual Kerning Values</p>
                                    <p className="font-weight-bold">Radikal Regular 96 pt</p>
                                </div>
                            </div>
                            <div className="spacing-carousel-item" key="4">
                                <img className="img-fluid"
                                     src={require('../../../images/typography/Typography_LetterSpacing_03_Medium.png')} />
                                <div className="note">
                                    <p>Tracking value 15<br/>
                                        Manual Kerning Values</p>
                                    <p className="font-weight-bold">Radikal Medium 96 pt</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographySpacing;
