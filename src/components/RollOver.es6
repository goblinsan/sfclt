import React from 'react';
import QuizFluxStore from '../stores/QuizFluxStore';
import RolloverText from './RolloverText.es6';

class RollOver extends React.Component {

  relativeTextPosition(){
    var textStyle = {
        position: 'absolute',
        backgroundColor: 'white',
        padding: '2vw',
        width: '22vw',
        textAlign: 'center',
        fontFamily: 'Oswald, sans-serif',
        fontWeight: 'lighter',
        display: 'none'
    }
    switch(this.props.textPosition) {
      case 'top-left':
        textStyle.bottom = this.verticalPosition(0);
        textStyle.right = '-10vw';
        return textStyle;
      case 'top-middle':
        textStyle.bottom = this.verticalPosition(0);
        textStyle.right = '-15vw';
        return textStyle;
      case 'top-right':
        textStyle.bottom = this.verticalPosition(0);
        textStyle.right = '-25vw';
        return textStyle;
      case 'left':
        textStyle.bottom = this.verticalPosition(-.5);
        textStyle.right = '-2vw';
        return textStyle;
      case 'right':
        textStyle.bottom = this.verticalPosition(-.5);
        textStyle.right = '-30vw';
        return textStyle;
      default:
        textStyle.bottom = this.verticalPosition(0);
        textStyle.right = '-10vw';
        return textStyle;
    }
  }

  isVisible(){
    if(this.props.currentSlide == this.props.slide){
      return 'block';
    } else{
      return 'none';
    }
  }

  mouseOver(rolloverId){
    $("#rolloverText_"+ rolloverId).finish();
    $("#rolloverText_"+ rolloverId).fadeIn(500);
  }

  mouseOut(rolloverId){
    $("#rolloverText_"+ rolloverId).fadeOut(3500);
  }

  verticalPosition(houseHeightMultiplier){
    //.05 is the ratio of the grass height to the width of the image house.svg
    let grassHeight = $('#house').width() * .05 ;
    let relativeHeight = houseHeightMultiplier * $('#house').height();
    return grassHeight + relativeHeight;
  }

  render() {
    var rolloverId = this.props.slide + '_' + this.props.itemNumber;
    var boxLocation = {
      position: 'absolute',
      left: this.props.iconLocation[0],
      bottom: this.verticalPosition(this.props.iconLocation[1]),
      display: this.isVisible()
    };
    var iconStyle = {
      position: 'absolute',
      bottom: 0,
      width: '5vw'
    };
    var textLocation = this.relativeTextPosition();
    return (
      <div id={'rolloverBox_'+ rolloverId} style={boxLocation}>
        <RolloverText slideName={this.props.slide} rolloverId={rolloverId} itemId={this.props.itemNumber} text={this.props.text} style={this.relativeTextPosition()} />
        <img id={"icon_"+rolloverId} src={"images/"+this.props.icon} style={iconStyle}
          onMouseOver={this.mouseOver.bind(this,rolloverId)}
          onMouseOut={this.mouseOut.bind(this,rolloverId)}
          />
      </div>
    );
  }
}

export default RollOver;
