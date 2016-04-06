import React from 'react';
import update from 'react-addons-update';
import QuizFluxStore from '../stores/QuizFluxStore';
import RollOver from './RollOver.es6';
import Graphic from './Graphic.es6';

class Interactions extends React.Component {
  constructor() {
    super();
    this.state = {currentSlide: '', rolloverText: {}, width: $(window).width(), height: $(window).height()};
    this.onChange = this.onChange.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    var newState = update(this.state, {
      width: {$set: $(window).width()},
      height: {$set: $(window).height()}
    });

    this.setState(newState);
  }

  componentDidMount(){
    this.setState({currentSlide: QuizFluxStore.getCurrentSlideId(), rolloverText: {}, width: $(window).width(), height: $(window).height()});
    QuizFluxStore.addChangeListener(this.onChange);
    window.addEventListener("resize", this.updateDimensions);
    $('.rolloverText').flowtype({
         fontRatio : 14
    });
  }

  componentWillUnmount() {
    QuizFluxStore.removeChangeListener(this.onChange);
    window.removeEventListener("resize", this.updateDimensions);
  }

  onChange() {
    this.setState({
      currentSlide: QuizFluxStore.getCurrentSlideId(),
      rolloverText: $(QuizFluxStore.getRolloverText('[class^="rolloverText_"]')).toArray(),
      width: $(window).width(), height: $(window).height()
    });
  }

  render() {
    return (
      <div id="interactionsContainer">
        <RollOver icon="MoneyButton.svg" slide="3" itemNumber="1" iconLocation={['22vw',.2]} textPosition="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="PriceTagButton.svg" slide="3" itemNumber="2" iconLocation={['64vw',.4]} textPosition="right" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <Graphic icon="peopleIcon.png" slide="3" itemNumber="3" iconLocation={['28vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <RollOver icon="dollarIcon.png" slide="7" itemNumber="1" iconLocation={['35vw',.5]} textPosition="left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="dollarIcon.png" slide="7" itemNumber="4" iconLocation={['17vw',.1]} textPosition="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="dollarIcon.png" slide="7" itemNumber="5" iconLocation={['82vw',.2]} textPosition="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="dollarIcon.png" slide="7" itemNumber="3" iconLocation={['55vw',.7]} textPosition="left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="dollarIcon.png" slide="7" itemNumber="2" iconLocation={['65vw',.8]} textPosition="right" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="AffordabilityButton.svg" slide="8" itemNumber="1" iconLocation={['23.5vw',.2]} textPosition="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <Graphic icon="SellerBuyerFamilyIcon.svg" slide="8" itemNumber="2" iconLocation={['21vw',0]} relWidth='13vw' currentSlide={this.state.currentSlide} />
        <RollOver icon="SharedEquityButton.svg" slide="9" itemNumber="1" iconLocation={['23.5vw',.25]} textPosition="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <Graphic icon="peopleIcon.png" slide="9" itemNumber="2" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <Graphic icon="peopleIcon.png" slide="10" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <Graphic icon="peopleIcon.png" slide="11" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <Graphic icon="peopleIcon.png" slide="12" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <RollOver icon="SharedEquityIconBW.svg" slide="12" itemNumber="2" iconLocation={['20.5vw',.2]} textPosition ="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="PriceTagIconBW.svg" slide="12" itemNumber="3" iconLocation={['65vw',.8]} textPosition ="top-right" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="LandOutline.svg" slide="12" itemNumber="4" iconLocation={['55vw',0]} textPosition ="top" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <Graphic icon="peopleIcon.png" slide="13" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <Graphic icon="peopleIcon.png" slide="14" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <RollOver icon="SharedEquityIconBW.svg" slide="14" itemNumber="2" iconLocation={['20.5vw',.2]} textPosition ="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="PriceTagIconBW.svg" slide="14" itemNumber="3" iconLocation={['65vw',.8]} textPosition ="top-right" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <RollOver icon="LandOutline.svg" slide="14" itemNumber="4" iconLocation={['55vw',0]} textPosition ="top" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <Graphic icon="peopleIcon.png" slide="15" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <Graphic icon="peopleIcon.png" slide="16" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
        <RollOver icon="CommunityIconBW.svg" slide="16" itemNumber="2" iconLocation={['20.5vw',.2]} textPosition ="top-left" currentSlide={this.state.currentSlide} text={this.state.rolloverText} />
        <Graphic icon="peopleIcon.png" slide="17" itemNumber="1" iconLocation={['24vw',0]} relWidth='4vw' currentSlide={this.state.currentSlide} />
      </div>
    );
  }
}

export default Interactions;
