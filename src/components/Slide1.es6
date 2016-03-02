import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';
import Slide from './Slide.es6';

class Slide1 extends Slide {

  yesNoClick(selection){
    QuizFluxStore.setYesNoResponse(selection);
    QuizActions.moveSlide(AppConstants.GOTO_NEXT);
  }

  render() {
    return (
      <li id="slide1">
      <div className="slideText">
      Are you interested in purchasing a home but having trouble affording the costs, 
      saving for a down payment, or competing with investors?
      </div>
      <div id="yesNoButtons">
        <div className="actionButton" onClick={this.yesNoClick.bind(this,"NO")}>NO</div>
        <div className="actionButton" onClick={this.yesNoClick.bind(this,"YES")}>YES</div>
      </div>
      </li>
    );
  }

}


export default Slide1;
