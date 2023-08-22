import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographyIntro = React.memo(() => (
    <div>
        <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/photography_hero.jpg') + ")"}}/>
        <div className="dark-section">
            <div className="container">
                <Anim className="row mt-4">
                    <div className="col-12 col-lg-5">
                        <h1 className="display-1 space-bellow">
                            Photography<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3 text-highlight">A consistent and unique style to photography brings our
                            brand to life, they allow us to connect with our audiences in a way which goes beyond
                            words.</p>
                    </div>
                    <div className="col-12 col-lg-6 offset-lg-1">
                        <p>Exceptional imagery is engaging and distinctive and maintains a common style across all
                            areas. We provide a unique viewpoint through reportage photography. Using selective focus,
                            dynamic cropping, asymmetry and unexpected angles to convey energy and offer new
                            perspectives.</p>
                        <p>Our aim throughout is to convey a sense of reportage and create a sense of place and depict
                            real life interactions between our people, the community and the sport.</p>
                        <p>There are five categories of imagery to reflect the different strategic pillars, each have
                            their own uniqueness but retain an essence of our overall style: Golf, Community,
                            Sustainability, Equipment and Corporate.</p>
                        <p>This style should maintain the same approach to colour, lighting, mood, and realistic subject
                            matter, to support The R&A brand and create an immediately recognisable style to all
                            photography.</p>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default PhotographyIntro;
