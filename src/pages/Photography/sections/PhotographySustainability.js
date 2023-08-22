import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographySustainability = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <h2 className="display-2">
                        Photography:<br/>
                        Sustainability
                    </h2>
                    <p className="display-3 text-highlight">Our imagery for sustainability should cover the nature,
                        resources, communities agenda and reflect golf’s activation across this diverse range of
                        topics.</p>
                    <p>An important aspect will be highlighting the unique characteristics of the natural landscape;
                        celebrating the harmony of golf and nature, and the enjoyment of sport in the environment.</p>
                    <p>It is important to showcase the diversity of different habitats and golf course designs globally,
                        recognising the opportunities for multifunctional use and community value.</p>
                    <p>We should retain the same visual style of warm, real and personal images and seek to highlight
                        the interactions between golf, people and nature.</p>
                </div>

                <div className="col-sm-6 offset-sm-1 pt-4 pt-sm-0">
                    <img className="w-100" src={require('../../../images/photography/sustainability-photography.png')}
                         alt="Photography Sustainability"/>
                </div>
            </Anim>
        </div>


    </div>
));

export default PhotographySustainability;
