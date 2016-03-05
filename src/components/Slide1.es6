import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';
import Slide from './Slide.es6';
import SlideText from './SlideText.es6';

class Slide1 extends Slide {
  constructor() {
    super();
  }

  yesNoClick(selection){
    QuizFluxStore.setYesNoResponse(selection);
    QuizActions.moveSlide(AppConstants.GOTO_NEXT);
  }

  render() {
    return (
      <li id="slide1">
      <SlideText slideName="slide1" />
      <div id="yesNoButtons">
        <div className="actionButton" onClick={this.yesNoClick.bind(this,"NO")}>NO</div>
        <div className="actionButton" onClick={this.yesNoClick.bind(this,"YES")}>YES</div>
      </div>
      </li>
    );
  }

}


export default Slide1;
