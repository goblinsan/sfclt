import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';
import Slide from './Slide.es6';

function getCurrentState() {
  return{
    yesNo: QuizFluxStore.getYesNoResponse()
  };
}

class Slide2 extends Slide {
  constructor() {
    super();
    this.state = getCurrentState();
  }

  yesNoResponse(){
    if (this.state.yesNo == 'YES'){
      return "We get it. Purchasing a home takes a lot of hard work, especially in a high-cost market like South Florida. Luckily, South Florida Community Land Trust might have a solution for you. Click the arrow to find out more.";
    } else {
      return "No problem. Owning a home isn’t for everyone. South Florida Community Land Trust (CLT) also offers affordable rentals. Contact us to find out more. If you’re still interested in learning more about South Florida CLT homeownership opportunities. Click the arrow to find out more. ";
    }
  }

  render() {
    return (
      <li id="slide2">
        <div className="slideText">
          {this.yesNoResponse()}
        </div>
      </li>
    );
  }
}


export default Slide2;
