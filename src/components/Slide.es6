import React from 'react';
import SlideText from './SlideText.es6';
import GuessButtons from  './GuessButtons.es6'

class Slide extends React.Component {

  render() {
    return (
      <li id={this.props.slideName}>
      <SlideText slideName={this.props.slideName} />
      {this.props.guess ? <GuessButtons guess={this.props.guess}/> : null}
      </li>
    );
  }

}


export default Slide;
