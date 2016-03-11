import React from 'react';
import QuizFluxStore from '../stores/QuizFluxStore';

class SlideText extends React.Component {
  constructor() {
    super();
    this.state = {slideText: ''};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    this.setState({slideText: QuizFluxStore.getSlideText('.slide_text')})
    QuizFluxStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    QuizFluxStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({slideText: QuizFluxStore.getSlideText('.slide_text')});
  }

  render() {
    return (
      <div className="slideText">
        <div dangerouslySetInnerHTML={{__html: this.state.slideText}} />
      </div>
    );
  }

}


export default SlideText;
