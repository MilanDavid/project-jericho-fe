import React from 'react';
import ColourIntro from './sections/ColourIntro.js';
import ColourPrimaryPalette from './sections/ColourPrimaryPalette.js';
import ColourSecondaryPalette1 from './sections/ColourSecondaryPalette1.js';
import ColourSecondaryPalette2 from './sections/ColourSecondaryPalette2.js';
import ColourUsing from './sections/ColourUsing.js';
import ColourBrandmark from './sections/ColourBrandmark.js';
import ColourTertiary from './sections/ColourTertiary.js';
import './Colour.scss';

const Colour = () => (
    <div className="colour-container">
        <ColourIntro />
        <ColourPrimaryPalette />
        <ColourSecondaryPalette1 />
        <ColourSecondaryPalette2 />
        <ColourUsing />
        <ColourBrandmark />
        <ColourTertiary />
    </div>
);

export default Colour;
