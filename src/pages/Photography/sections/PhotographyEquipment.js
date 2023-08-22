import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographyEquipment = React.memo(() => (
    <div>
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-6">
                    <img className="w-100" src={require('../../../images/photography/equipment-photography.png')} alt="Photography Equipment"/>
                </div>

                <div className="col-sm-5 offset-sm-1 pt-4 pt-sm-0">
                    <h2 className="display-2">
                        Photography:<br/>
                        Equipment
                    </h2>
                    <p className="display-3">Our equipment photography shares the same qualities as lifestyle
                        photography and captures the unseen moments from our behind the scenes work that focus on the
                        expertise, people and situations.</p>
                    <p>Celebrate the details and wider context within the photography using macro vs micro shots to help
                        fill out these rich stories. Explore this through unexpected angles, new perspectives and focus
                        to increase intrigue and dynamism.</p>
                </div>
            </Anim>
        </div>


    </div>
));

export default PhotographyEquipment;
