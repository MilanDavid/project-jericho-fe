import React from 'react';
import GraphicLanguageIntro from './sections/GraphicLanguageIntro.js';
import GraphicLanguagePatterns from './sections/GraphicLanguagePatterns.js';
import GraphicLanguageUsage from './sections/GraphicLanguageUsage.js';
import GraphicLanguageCrops from './sections/GraphicLanguageCrops.js';
import GraphicLanguagePhotography from './sections/GraphicLanguagePhotography.js';
import GraphicLanguageWorkingWithPhoto from './sections/GraphicLanguageWorkingWithPhoto.js';
import GraphicLanguageCustomPattern from './sections/GraphicLanguageCustomPattern.js';
import GraphicLanguageLayoutExamples from './sections/GraphicLanguageLayoutExamples.js';

import './GraphicLanguage.scss';

const GraphicLanguage = () => (
    <div className="graphic-language-container">
        <GraphicLanguageIntro/>
        <GraphicLanguagePatterns/>
        <GraphicLanguageUsage/>
        <GraphicLanguageCrops/>
        <GraphicLanguagePhotography/>
        <GraphicLanguageWorkingWithPhoto/>
        <GraphicLanguageCustomPattern/>
        <GraphicLanguageLayoutExamples/>
    </div>
);

export default GraphicLanguage;
