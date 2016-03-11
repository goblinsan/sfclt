import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/QuizConstants';


var QuizActions = {
  loadReturnedSlideData(data){
    AppDispatcher.dispatch({actionType: AppConstants.SLIDE_DATA_LOAD, loadedData: data.loadedData});
  },
  
  moveSlide(direction){
    AppDispatcher.dispatch({actionType: direction});
  }
}

export default QuizActions;