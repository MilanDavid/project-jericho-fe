import Introduction from '~/pages/Introduction/Introduction.js';
import TheBrandmark from '~/pages/TheBrandmark/TheBrandmark.js';
import Colour from '~/pages/Colour/Colour.js';
import Photography from '~/pages/Photography/Photography.js';
import Typography from '~/pages/Typography/Typography.js';
import GridSystem from '~/pages/GridSystem/GridSystem.js';
import GraphicLanguage from '~/pages/GraphicLanguage/GraphicLanguage.js';
import BestPractices from '~/pages/BestPractices/BestPractices.js';


const pages = [
    {
        title: 'Introduction',
        path: '/',
        comp: Introduction
    },
    {
        title: 'The Brandmark',
        path: '/the-brandmark/',
        comp: TheBrandmark
    },
    {
        title: 'Colour',
        path: '/colour/',
        comp: Colour
    }, {
        title: 'Photography',
        path: '/photography/',
        comp: Photography
    }, {
        title: 'Typography',
        path: '/typography/',
        comp: Typography
    }, {
        title: 'Grid System',
        path: '/grid-system/',
        comp: GridSystem
    }, {
        title: 'Graphic Language',
        path: '/graphic-language/',
        comp: GraphicLanguage
    }, {
        title: 'Best Practices',
        path: '/best-practices/',
        comp: BestPractices
    }
];

export default pages;
