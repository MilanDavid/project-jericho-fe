import React from 'react';
import TheBrandmarkIntro from './sections/TheBrandmarkIntro.js';
import TheBrandbmarkExclusion from './sections/TheBrandmarkExclusion.js';
import TheBrandmarkColour from './sections/TheBrandmarkColour.js';
import TheBrandmarkMonotone from './sections/TheBrandmarkMonotone.js';
import TheBrandmarkMisuse from './sections/TheBrandmarkMisuse.js';
import TheBrandmarkLockUps from './sections/TheBrandmarkLockUps.js';
import TheBrandmarkSizings from './sections/TheBrandmarkSizing.js';
import TheBrandmarkPositioning from './sections/TheBrandmarkPositioning.js';
import TheBrandmarkAmpersands from './sections/TheBrandmarkAmpersands.js';
import './TheBrandmark.scss';


const TheBrandmark = () => (
    <div className="brandmark-container">
        <TheBrandmarkIntro />
        <TheBrandbmarkExclusion />
        <TheBrandmarkColour />
        <TheBrandmarkMonotone />
        <TheBrandmarkMisuse />
        <TheBrandmarkLockUps />
        <TheBrandmarkSizings />
        <TheBrandmarkPositioning />
        <TheBrandmarkAmpersands />
    </div>
);


export default TheBrandmark;
