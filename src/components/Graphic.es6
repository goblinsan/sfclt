import React from 'react';
import QuizFluxStore from '../stores/QuizFluxStore';

class Graphic extends React.Component {
  constructor() {
    super();
    this.state = {currentSlide: ''};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    this.setState({currentSlide: QuizFluxStore.getCurrentSlideId()})
    QuizFluxStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    QuizFluxStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({currentSlide: QuizFluxStore.getCurrentSlideId()});
  }

  isVisible(){
    if(this.state.currentSlide == this.props.slide){
      return 'block';
    } else{
      return 'none';
    }
  }

  render() {
    var rolloverId = this.props.slide + '_' + this.props.itemNumber;
    var boxLocation = {
      position: 'absolute',
      left: this.props.iconLocation[0],
      top: this.props.iconLocation[1],
      display: this.isVisible()
    };
    var iconStyle = {
      position: 'absolute',
      width: this.props.relWidth
    };
    return (
      <div id={'rolloverBox_'+ rolloverId} style={boxLocation}>
        <img id={"icon_"+rolloverId} src={"images/"+this.props.icon} style={iconStyle} />
      </div>
    );
  }
}

export default Graphic;