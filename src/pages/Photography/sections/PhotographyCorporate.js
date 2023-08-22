import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const PhotographyCorporate = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <h2 className="display-2">
                        Photography:<br/>
                        Corporate
                    </h2>
                    <p className="display-3 text-highlight">Our people and partners reflect the importance of
                        inclusivity and collaboration. They are at the heart of everything we do so we capture them
                        interacting, discussing, listening and contributing.</p>
                    <p>Real employees in real places convey the breadth of our business. They should appear within
                        natural settings, lighting and situations. Images should be informal and reflect their
                        personality.</p>
                    <p>Using spontaneous angles we unlock different perspectives to our people and champion their
                        uniqueness.</p>
                    <p>Shots should be inviting and never faked or posed. They contain layers built by depth that tell
                        engaging stories.</p>
                </div>

                <div className="col-sm-6 offset-sm-1 pt-4 pt-sm-0">
                    <img className="w-100" src={require('../../../images/photography/corporate-photography.png')} alt="Photography Corporate"/>
                </div>
            </Anim>
        </div>


    </div>
));

export default PhotographyCorporate;
