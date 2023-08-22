import React from 'react';
import GridSystemIntro from './sections/GridSystemIntro.js';
import GridSystemFormats from './sections/GridSystemFormats.js';
import GridSystemTypography from './sections/GridSystemTypography.js';
import GridSystemExamples from './sections/GridSystemExamples.js';

import './GridSystem.scss';

const GridSystem = () => (
    <div className="grid-container">
        <GridSystemIntro />
        <GridSystemFormats />
        <GridSystemTypography />
        <GridSystemExamples />
    </div>
);

export default GridSystem;