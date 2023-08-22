import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const TypographyHierarchy = React.memo(() => (
    <div className="typography-hierarchy">
        <div className="white-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-4">
                        <h1 className="display-2">
                            Hierarchy<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3">
                            When a variety of type sizes have been used, the weight and size of the typography should
                            create a clear hierarchy. This contrast creates asimple way to navigate information.
                        </p>

                        <p> When the audience is familiar with the hierarchy of information, it takes much less time to
                            find information. Our system should try to follow three sizes to communicate this hierarchy.
                        </p>

                        <p><strong>Size one</strong><br/>
                            For headlines and titles.</p>

                        <p><strong>Size two</strong><br/>
                            For descriptors and sub-headings</p>

                        <p><strong>Size three</strong><br/>
                            For body copy and additional information.</p>

                        <p>Within literature, we may use an additional smaller size for captions.</p>

                        <p>These examples are a guide and each job should be analysed individually. Use weights and
                            sizes that best suit the message while maintaining a clear hierarchy.
                        </p>
                    </div>
                    <div className="offset-sm-2 col-sm-6">
                        <h1 className="font-size-100">Title 100pt</h1>
                        <h2 className="font-size-40">Supporting title 40pt</h2>
                        <p className="font-size-14">Body copy 14pt</p>

                        <h1 className="font-size-66 pt-5">Title 66pt</h1>
                        <h2 className="font-size-40">Supporting title 40pt</h2>
                        <p className="font-size-12">Body copy 12pt</p>

                        <h1 className="font-size-72 pt-5">Title 72pt</h1>
                        <h2 className="font-size-26">Supporting title 26pt</h2>
                        <p className="font-size-12">Body copy 12pt</p>

                        <h1 className="font-size-40 pt-5">Title 40pt</h1>
                        <h2 className="font-size-40">Supporting title 40pt</h2>
                        <p className="font-size-10">Body copy 10pt</p>

                        <h1 className="font-size-30 pt-5">Title 30pt</h1>
                        <h2 className="font-size-15">Supporting title 15pt</h2>
                        <p className="font-size-10">Body copy 10pt</p>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographyHierarchy;
