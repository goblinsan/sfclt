import React from 'react';
import QuizFluxStore from '../stores/QuizFluxStore';

class Graphic extends React.Component {

  isVisible(){
    if(this.props.currentSlide == this.props.slide){
      return 'block';
    } else{
      return 'none';
    }
  }

  verticalPosition(){
    //.05 is the ratio of the grass height to the width of the house.svg
    if (this.props.initHouseSize != undefined) {
      let heightVal = this.props.initHouseSize[1];
      if (heightVal == 0) {
        heightVal = this.props.initHouseSize[0] / 3.3689;
      }
      let grassHeight = $('#house').width() * .05 ;
      let relativeHeight = this.props.iconLocation[1] * heightVal;
      return grassHeight + relativeHeight;
    } else {
      return 300;
    }

  }

  render() {
    var rolloverId = this.props.slide + '_' + this.props.itemNumber;
    var boxLocation = {
      position: 'absolute',
      left: this.props.iconLocation[0],
      bottom: this.verticalPosition(),
      display: this.isVisible()
    };
    var iconStyle = {
      position: 'absolute',
      bottom: 0,
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
