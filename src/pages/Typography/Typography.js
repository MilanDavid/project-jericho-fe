import React from 'react';
import TypographyIntro from './sections/TypographyIntro.js';
import TypographyWeights from './sections/TypographyWeights.js';
import TypographySizes from './sections/TypographySizes.js';
import TypographyRules from './sections/TypographyRules.js';
import TypographySpacing from './sections/TypographySpacing.js';
import TypographyExample from './sections/TypographyExample.js';
import TypographyHierarchy from './sections/TypographyHierarchy.js';
import TypographyStyling from './sections/TypographyStyling.js';

import './Typography.scss';

const Typography = () => (
    <div className="typography-container">
        <TypographyIntro />
        <TypographyWeights />
        <TypographySizes />
        <TypographyRules />
        <TypographySpacing />
        <TypographyExample />
        <TypographyHierarchy />
        <TypographyStyling />
    </div>
);

export default Typography;
