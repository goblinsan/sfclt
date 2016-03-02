import AppDispatcher from '../dispatcher/appDispatcher';


var QuizActions = {
  
  moveSlide(direction){
    AppDispatcher.dispatch({moveTo: direction});
  }
}

export default QuizActions;