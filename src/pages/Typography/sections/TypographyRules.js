import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const TypographyRules = React.memo(() => (
    <div className="typography-rules">
        <div className="dark-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-4">
                        <h1 className="display-2">
                            The Rules<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3 text-highlight">
                            Typography is always ranged left this creates a clear starting point for each line,
                            increasing
                            visual consistency and legibility.
                        </p>
                        <p>Line spacing has a major influence on
                            legibility and influences the look of the
                            final communication. It should be carefully
                            considered to achieve an effective result.
                        </p>
                        <p>
                            Titles should always be set in sentence
                            case to increase clarity and friendliness.
                        </p>
                    </div>
                    <div className="offset-sm-2 col-sm-6">
                        <img className="img-fluid" src={require('../../../images/typography/copy-example.svg')} />
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographyRules;
