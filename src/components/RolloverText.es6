import React from 'react';
import QuizFluxStore from '../stores/QuizFluxStore';

class RolloverText extends React.Component {
  constructor() {
    super();
    this.state = {rolloverText: ''};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    this.setState({rolloverText: QuizFluxStore.getSlideText('.rolloverText_'+this.props.itemId)})
    QuizFluxStore.addChangeListener(this.onChange);
    $('.rolloverText').flowtype({
         fontRatio : 14
    });
  }

  componentWillUnmount() {
    QuizFluxStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({rolloverText: QuizFluxStore.getSlideText('.rolloverText_'+this.props.itemId)});
  }

  render() {
    return (
      <div id={"rolloverText_"+ this.props.rolloverId} className="rolloverText" style={this.props.style}>
        <div dangerouslySetInnerHTML={{__html: this.state.rolloverText}} />
      </div>
    );
  }

}


export default RolloverText;
