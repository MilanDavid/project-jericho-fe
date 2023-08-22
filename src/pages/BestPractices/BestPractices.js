import React from 'react';
import BestPracticesIntro from './sections/BestPracticesIntro.js';
import BestPracticesChecklist from './sections/BestPracticesChecklist.js';
import BestPracticesApplications from './sections/BestPracticesApplications.js';

import "./BestPractices.scss";

const BestPractices = () => (
    <div className="best-practices-container">
        <BestPracticesIntro />
        <BestPracticesChecklist />
        <BestPracticesApplications />
    </div>
);

export default BestPractices;
