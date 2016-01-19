//var React = require('react');
//var ReactDOM = require('react-dom');

//browserify -t [ babelify --presets [ es2015 react ] --plugins [ transform-class-properties  ]  ] src/main.js -o build/main.js

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './appContainer';


ReactDOM.render(
  <AppContainer />,
  document.getElementById('content')
);