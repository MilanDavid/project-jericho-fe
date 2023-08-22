import React from 'react';
import ScrollBox from '~/components/ScrollBox/ScrollBox.js';
import Anim from '~/components/Anim/Anim.js';

const GridSystemExamples = React.memo(() => (
    <div className="white-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <h2 className="display-2">
                        Layout Examples<span className="text-highlight">.</span>
                    </h2>

                    <p className="display-3">
                        The examples provided show how our flexible grid system can be utilised to create a variety of
                        different layouts, whilst maintaining a consistent brand look &amp; feel.
                    </p>

                </div>

                <div className="offset-sm-1 col-sm-6">
                    <p className="font-weight-bold m-0">Note:</p>
                    <p>
                        The examples shown here are not intended as final, or to illustrate a particular usage.</p>
                    <p>When designing a brand piece, the designer will need to utilise the grid depending on factors
                        such as content / intended usage / location etc.
                    </p>
                </div>
            </Anim>
            <Anim className="row">
                <div className="col-sm-12 mt-5 pt-5">
                    <ScrollBox>
                        <div className="layout-examples">
                            <div className="layout-examples-item">
                                <img className="img-fluid" src={require('../../../images/grid/Grid_Layout_Example_01.svg')} />
                            </div>
                            <div className="layout-examples-item">
                                <img className="img-fluid" src={require('../../../images/grid/Grid_Layout_Example_02.svg')}/>
                            </div>
                            <div className="layout-examples-item">
                                <img className="img-fluid" src={require('../../../images/grid/Grid_Layout_Example_03.svg')}/>
                            </div>
                            <div className="layout-examples-item">
                                <img className="img-fluid" src={require('../../../images/grid/Grid_Layout_Example_04.svg')}/>
                            </div>
                            <div className="layout-examples-item">
                                <img className="img-fluid" src={require('../../../images/grid/Grid_Layout_Example_05.svg')}/>
                            </div>
                            <div className="layout-examples-item">
                                <img className="img-fluid" src={require('../../../images/grid/Grid_Layout_Example_06.svg')}/>
                            </div>
                        </div>
                    </ScrollBox>
                </div>
            </Anim>
        </div>
    </div>
));

export default GridSystemExamples;
