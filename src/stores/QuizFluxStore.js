import React from 'react';
import AppDispatcher from '../dispatcher/appDispatcher';
import Slide from '../components/Slide.es6';
import Response from '../components/Response.es6';
import AppConstants from '../constants/QuizConstants';
import QuizActions from '../actions/QuizActions';
import FluxStore from './FluxStore';

var CHANGE_EVENT = 'change';

let appState = {};

var slides = [
  <Slide slideName="slide1" guess={['NO', 'YES']} />,
  <Response slideName="slide2" />,
  <Slide slideName="slide3" />,
  <Slide slideName="slide4" />,
  <Slide slideName="slide5" />,
  <Slide slideName="slide6" />,
  <Slide slideName="slide7" />,
  <Slide slideName="slide8" />,
  <Slide slideName="slide9" />,
  <Slide slideName="slide10" />,
  <Slide slideName="slide11" guess={['TRUE', 'FALSE']} />,
  <Response slideName="slide12" />,
  <Slide slideName="slide13" guess={['TRUE', 'FALSE']} />,
  <Response slideName="slide14" />,
  <Slide slideName="slide15" guess={['TRUE', 'FALSE']} />,
  <Response slideName="slide16" />,
];

function loadSlideData(){
  //live site: /about-us/chase-partnership/
  //text site: testScrape.html
  $.get("/about-us/chase-partnership/").done(function(dataHtml){
    let slideData = $(dataHtml).find('#allSlides');
    QuizActions.loadReturnedSlideData({actionType: AppConstants.SLIDE_DATA_LOAD, loadedData: slideData});
  });
}

class QuizFluxStore extends FluxStore {
  constructor() {
    super();
    appState.currentSlide = 1;
    appState.slideInMotion = false;
    appState.frameType = '';
    appState.moveDistance = 0;
    appState.guess = 'NO';
    appState.slideData = loadSlideData();
  }

  state = {
    currentSlide: 1,
  };

  setGuess(guess){
    appState.guess = guess;
  }

  getGuess() {
    return (
      appState.guess
    );
  }

  getCurrentSlideId() {
    return (
      appState.currentSlide
    );
  }

  getCurrentSlide() {
    return (
      slides[appState.currentSlide-1]
    );
  }

  getSlideText(classSelector){
    return $(appState.slideData).find('#slide'+appState.currentSlide).find(classSelector).html();
  }

  slideHasNext() {
    return appState.currentSlide < (slides.length) ? true : false;
  }

  slideHasPrev() {
    return appState.currentSlide > 1 ? true : false;
  }

  getNextSlide() {
    return (
      slides[appState.currentSlide+1]
    );
  }

  getPrevSlide() {
    return (
      slides[appState.currentSlide-1]
    );
  }

  getPositionTransistion() {
    return({
      transform: 'translateX('+appState.moveDistance+'px)',
      transition: 'transform .7s cubic-bezier(0.445, 0.05, 0.55, 0.95)'
    });
  }

}

let quizFluxStoreInstance = new QuizFluxStore();

quizFluxStoreInstance.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case AppConstants.GOTO_PREV:
      appState.currentSlide = appState.currentSlide-1;
      appState.slideInMotion = true;
      appState.moveDistance = appState.moveDistance-300;
      break;
    case AppConstants.GOTO_NEXT:
      appState.currentSlide = appState.currentSlide+1;
      appState.slideInMotion = true;
      appState.moveDistance = appState.moveDistance+300;
      break;
    case AppConstants.SLIDE_DATA_LOAD:
      appState.slideData = action.loadedData;
      break;

    default:
      return;
  }

  quizFluxStoreInstance.emitChange();
});

export default quizFluxStoreInstance;
