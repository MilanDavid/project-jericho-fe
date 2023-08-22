import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographyGolf = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <h2 className="display-2">
                        Photography:<br/>
                        Golf
                    </h2>

                    <p className="pb-sm-1">Photography is not</p>
                    <ul className="photography-best-practice-list">
                        <li>Manicured</li>
                        <li>Stages</li>
                        <li>Glossy</li>
                        <li>Immaculate</li>
                        <li>Saturated</li>
                    </ul>

                </div>

                <div className="col-sm-6 offset-sm-1 pt-4 pt-sm-0">
                    <img className="w-100" src={require('../../../images/photography/golf-photography.png')} alt="Photography Golf"/>
                </div>
            </Anim>
        </div>
    </div>
));

export default PhotographyGolf;
