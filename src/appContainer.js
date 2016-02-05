import React from 'react';
import Slider from 'react-slick';

import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide10 from './slide10';
import Slide11 from './slide11';
import Slide12 from './slide12';
import Slide13 from './slide13';
import Slide14 from './slide14';


class AppContainer extends React.Component {
  static defaultProps = {
    stageWidth: '800px',
    stageHeight: '600px',
  }

  state = {
    stageWidth: '800px',
    stageHeight: '600px',
  }

  componentDidMount() {
    this.setSize();
    window.addEventListener('resize', this.setSize);
  }

  setSize = () => {
    var thisWidth = this.refs.root.offsetWidth;
    var thisHeight = this.refs.root.offsetHeight;
    this.setState({stageWidth: thisWidth, stageHeight: thisHeight});
  }

  render() {
    return (
      <div ref="root">
        <div className="rootBg">
          <div className="distantSkyline"><img src='images/distantSkyline.png' width="50%" /><img src='images/distantSkyline.png' width="50%" /></div>
          <div className="midSkyline"><img src='images/midSkyline.png' width="50%" /><img src='images/midSkyline.png' width="50%" /></div>
          <div className="rowHouses"><img src='images/rowHouses.png' width="85%" /></div>
        </div>
        <AppSlider />
      </div>
    );
  }
}


class AppSlider extends React.Component{
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false
    };

    return (
      <Slider {...settings}>
        <div><Slide1 /></div>
        <div><Slide2 /></div>
        <div><Slide10 /></div>
        <div><Slide11 /></div>
        <div><Slide12 /></div>
        <div><Slide13 /></div>
        <div><Slide14 /></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Slider>
    );
  }
}


export default AppContainer;