import React from 'react';
import QuizActions from '../actions/QuizActions';
import QuizFluxStore from '../stores/QuizFluxStore';
import Sky from './Sky.es6';
import ArrowButton from './ArrowButton.es6';

function getAllSlides() {
  return{
    currentSlide: QuizFluxStore.getCurrentSlide()
  };
}

function displayPrev() {
  return QuizFluxStore.getCurrentSlideId() != 1 && QuizFluxStore.getCurrentSlideId() != 2 ;
}

function displayNext() {
  return QuizFluxStore.getCurrentSlideId() != 1 && QuizFluxStore.slideHasNext();
}

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = getAllSlides();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    QuizFluxStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    QuizFluxStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAllSlides());
  }

  moveClick(direction) {
    QuizActions.moveSlide(direction);
  }

  render() {
    var positionTransistionStyle = QuizFluxStore.getPositionTransistion();
    return (
      <div>
        <Sky />
        <div id="grass"></div>
        <div id="slidesWrapper">
          { displayPrev() ? <ArrowButton id="prev" /> : null }
          <ul id="allSlides">
            {this.state.currentSlide}
          </ul>
          { displayNext() ? <ArrowButton id="next" /> : null }
        </div>
      </div>
    );
  }
}


export default Quiz;
