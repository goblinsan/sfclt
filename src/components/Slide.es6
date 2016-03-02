import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';

class Slide extends React.Component {

  moveClick(direction) {
    QuizActions.moveSlide(direction);
  }

  render() {
    return (
      <div>
        <button onClick={this.moveClick.bind(this,AppConstants.GOTO_PREV)} disabled={!QuizFluxStore.slideHasNext()}>prev</button>
        <button onClick={this.moveClick.bind(this,AppConstants.GOTO_NEXT)} disabled={!QuizFluxStore.slideHasNext() || QuizFluxStore.slideInMotion}>next</button>
      </div>
    );
  }
}


export default Slide;
