import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const GridSystemFormats = React.memo(() => (
    <div className="white-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-12">
                    <h1 className="display-2 mb-4">
                        Example Formats<span className="text-highlight">.</span>
                    </h1>
                </div>
            </Anim>
            <Anim className="row">
                <div className="col-sm-12">
                    <img className="img-fluid" src={require('../../../images/grid/formats.svg')} />
                </div>
            </Anim>
        </div>
    </div>
));

export default GridSystemFormats;
