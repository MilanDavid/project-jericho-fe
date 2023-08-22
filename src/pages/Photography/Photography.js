import React from 'react';
import PhotographyIntro from './sections/PhotographyIntro.js';
import PhotographyWhatToShoot from './sections/PhotographyWhatToShoot.js';
import PhotoGraphyWhatToShoot2 from './sections/PhotoGraphyWhatToShoot2.js';
import PhotographyBestPractice from './sections/PhotographyBestPractice.js';
import PhotographyGolf from './sections/PhotographyGolf.js';
import PhotographyCommunity from './sections/PhotographyCommunity.js';
import PhotographySustainability from './sections/PhotographySustainability.js';
import PhotographyEquipment from './sections/PhotographyEquipment.js';
import PhotographyCorporate from './sections/PhotographyCorporate.js';
import PhotographyTone from './sections/PhotographyTone.js';
import PhotographyImages from './sections/PhotographyImages.js';
import './Photography.scss';



const Photography = () => (
    <div className="photography-container">
        <PhotographyIntro />
        <PhotographyWhatToShoot />
        <PhotoGraphyWhatToShoot2 />
        <PhotographyBestPractice />
        <PhotographyGolf />
        <PhotographyCommunity />
        <PhotographySustainability />
        <PhotographyEquipment />
        <PhotographyCorporate />
        <PhotographyTone />
        <PhotographyImages />
    </div>
);

export default Photography;
