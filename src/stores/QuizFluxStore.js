import React from 'react';
import AppDispatcher from '../dispatcher/appDispatcher';
import Slide1 from '../components/Slide1.es6';
import Slide2 from '../components/Slide2.es6';
import Slide3 from '../components/Slide3.es6';
import AppConstants from '../constants/QuizConstants';
import QuizActions from '../actions/QuizActions';
import FluxStore from './FluxStore';

var CHANGE_EVENT = 'change';

let appState = {};

var slides = [<Slide1 />,<Slide2 />,<Slide3 />];

function loadSlideData(){
  $.get("testScrape.html").done(function(dataHtml){
    let slideData = $(dataHtml).find('#allSlides');
    QuizActions.loadReturnedSlideData({actionType: 'slideDataLoad', loadedData: slideData});
  });
}

class QuizFluxStore extends FluxStore {
  constructor() {
    super();
    appState.currentSlide = 1;
    appState.slideInMotion = false;
    appState.frameType = '';
    appState.moveDistance = 0;
    appState.yesNo = 'NO';
    appState.slideData = loadSlideData();
  }

  state = {
    currentSlide: 1,
  };

  setYesNoResponse(response){
    appState.yesNo = response;
  }

  getYesNoResponse() {
    return (
      appState.yesNo
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

  getSlideText(slideName){
    return $(appState.slideData).find('#'+slideName).find('.slide_text').text();
  }

  slideHasNext() {
    return appState.currentSlide < (slides.length - 1) ? true : false;
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
    case 'slideDataLoad':
      appState.slideData = action.loadedData;
      break;

    default:
      return;
  }

  quizFluxStoreInstance.emitChange();
});

export default quizFluxStoreInstance;