// Styling
import '~/styling/ra/fonts.scss';
import '~/styling/base.scss';

// PolyFills
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.jsx';


ReactDOM.render(<App />, document.getElementById('root'));
