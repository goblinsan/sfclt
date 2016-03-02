import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';
import Slide from './Slide.es6';


class Slide3 extends Slide {

  render() {
    return (
      <li id="slide2">
        <div className="slideText">
          South Florida CLT provides housing using the Community Land Trust (CLT) model. In a CLT, homes are sold at an affordable price to income qualified households. Rollover the icons for more info. 
        </div>
      </li>
    );
  }
}


export default Slide3;
