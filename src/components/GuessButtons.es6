import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';

class GuessButtons extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
    $('.actionButton').flowtype({
         fontRatio : 10
      });
  }

  guessClick(selection){
    QuizFluxStore.setGuess(selection);
    QuizActions.moveSlide(AppConstants.GOTO_NEXT);
  }

  render() {
    return (
      <div id="guessButtons">
        <div className="actionButton" onClick={this.guessClick.bind(this,this.props.guess[0])}>{this.props.guess[0]}</div>
        <div className="actionButton" onClick={this.guessClick.bind(this,this.props.guess[1])}>{this.props.guess[1]}</div>
      </div>
    );
  }

}


export default GuessButtons;
