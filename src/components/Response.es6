import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';
import SlideText from './SlideText.es6';
import GuessButtons from  './GuessButtons.es6'

class Response extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: QuizFluxStore.getGuess(),
      guess1Text: '', 
      guess2Text: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      guess1Text: QuizFluxStore.getSlideText('.guess1Text'),
      guess2Text: QuizFluxStore.getSlideText('.guess2Text')
    })
    QuizFluxStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    QuizFluxStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      guess1Text: QuizFluxStore.getSlideText('.guess1Text'),
      guess2Text: QuizFluxStore.getSlideText('.guess2Text')
    })
  }

  guessResponse(){
    if (this.state.guess == 'YES' || this.state.guess == 'TRUE'){
      return this.state.guess1Text;
    } else {
      return this.state.guess2Text;
    }
  }

  render() {
    return (
      <li id="slide2">
        <div className="slideText">
          <div dangerouslySetInnerHTML={{__html: this.guessResponse()}} />
        </div>
      </li>
    );
  }

}


export default Response;
