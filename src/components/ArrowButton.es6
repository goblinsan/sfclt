import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';

class ArrowButton extends React.Component {

  moveClick(direction) {
    return direction == "prev" ? QuizActions.moveSlide(AppConstants.GOTO_PREV) : QuizActions.moveSlide(AppConstants.GOTO_NEXT);
  }

  render() {
    return (
      <img className="btn" id={this.props.id} src={"images/"+this.props.id+"Arrow.png"} onClick={this.moveClick.bind(this,this.props.id)}/>
    );
  }
}

export default ArrowButton;