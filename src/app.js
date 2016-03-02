import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz';
//browserify -t [ babelify --presets [ es2015 react ] --plugins [ transform-class-properties  ]  ] src/app.js -o build/js/bundle.js

ReactDOM.render(
  <Quiz />,
  document.getElementById('quiz')
);