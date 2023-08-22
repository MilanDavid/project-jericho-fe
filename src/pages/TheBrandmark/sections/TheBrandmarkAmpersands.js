import React from 'react';
import Asset from '~/components/Asset/Asset.js';
import AssetDisplay from '~/components/AssetDisplay/AssetDisplay.js';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';


const slides = [
    {
        name: 'Master Brand',
        text: 'Half Swing',
        key: 'TheBrandmark_Ampersands_HalfSwing',
    },
    {
        name: 'Master Brand',
        text: 'Full Swing',
        key: 'TheBrandmark_Ampersands_FullSwing',
    },
    {
        name: 'Championships',
        text: 'Half Swing',
        key: 'TheBrandmark_Championships_HalfSwing',
    },
    {
        name: 'Championships',
        text: 'Full Swing',
        key: 'TheBrandmark_Championships_FullSwing',
    },
    {
        name: 'Sustainability',
        text: 'Half Swing',
        key: 'TheBrandmark_Sustainability_HalfSwing',
    },
    {
        name: 'Sustainability',
        text: 'Full Swing',
        key: 'TheBrandmark_Sustainability_FullSwing',
    },
    {
        name: 'Development',
        text: 'Half Swing',
        key: 'TheBrandmark_Development_HalfSwing',
    },
    {
        name: 'Development',
        text: 'Full Swing',
        key: 'TheBrandmark_Development_FullSwing',
    },
    {
        name: 'Governance',
        text: 'Half Swing',
        key: 'TheBrandmark_Governance_HalfSwing',
    },
    {
        name: 'Governance',
        text: 'Full Swing',
        key: 'TheBrandmark_Governance_FullSwing',
    },
];


const TheBrandmarkAmpersands = React.memo(() => (
    <div className="grey-section">
        <div className="container big-spacing">
            <div className="row">
                <Anim className="col-sm-5">
                    <h2 className="display-2">Ampersands<span className="text-highlight">.</span></h2>
                    <p className="display-3">Within the visual identity there are three R&A ampersands derived from our
                        brandmark, these have been carefully considered for different roles and can be used to amplify
                        the recognition of our brand when needed.</p>
                    <p>The stylised ampersands (1 and 2) are reserved for large headlines and titles only where two
                        connecting words or opposing terms are linked via the visual tool.</p>
                    <p>The typographic ampersand is used for any copy that is not a header or title.</p>
                    <p>While the ampersand is an important tool in our visual identity it is not necessary in every
                        communication. The ampersands should always be a connecting device and not for decoration. Used
                        correctly the elements will add expression, richness and a visual link to our identity.</p>
                    <p>Do not use more than one stylised ampersand per & single communication.</p>
                </Anim>
                <div className="col ampersand-gallery-container">
                    <div className="ampersand-gallery-wrapper">
                        <Carousel
                            hideBullets
                            className="ampersand-gallery"
                            showSuroundingSlides>

                            {slides.map((slide, id) => (
                                <Asset key={id} intKey={slide.key} className="ampersand-slide-container">
                                    <div className="ampersand-slide d-flex justify-content-center align-items-center">
                                        <div className="ampersand-slide-title">
                                            <h4>{slide.name}</h4>
                                            <p>{slide.text}</p>
                                        </div>
                                        <AssetDisplay
                                            className="w-75"
                                            defaultImg="https://via.placeholder.com/540X600/fff/041E42?text=540+x+600"
                                            intKey={slide.key}/>
                                    </div>
                                </Asset>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

export default TheBrandmarkAmpersands;
