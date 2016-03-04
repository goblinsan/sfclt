import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
 
class Slide10 extends React.Component {
 
  state = {
    showYes: false,
    showNo: false,
    clickHandler: this.changeSlide
  };
 
  slideOptions = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false
    };
 
  showYesModal = () => {
    this.setState({showYes: true});
  };
 
  hideYesModal = () => {
    this.setState({showYes: false});
    console.log("hey joe");
    console.log(this.props.nextSlide);
    this.props.nextSlide(this.state.slideOptions);
  };
 
  showNoModal = () => {
    this.setState({showNo: true});
  };
 
  hideNoModal = () => {
    this.setState({showNo: false});
  };
 
  render() {
    return (
      <div className='slide10'>
        <div className='jumbotron' >
          <div className='container'>
            <img src='images/SFCLT_logo_standard_FULL-1024x382.png' width='60%' />
          </div>
        </div>
        <div className='containerContent'>
          <h3>True or False: Buying a home through SFCLT is exactly the same as a traditional home purchase?</h3>
          <button className='btn-yesNo' onClick={this.showYesModal}>True</button>
          <button className='btn-yesNo' onClick={this.showNoModal}>False</button>
        </div>
        <Modal
          {...this.props}
          show={this.state.showYes}
          onHide={this.hideYesModal}
          dialogClassName="custom-modal"
        >
          <Modal.Body>
            <h2>Sorry, that is incorrect. </h2>
            <h4>While many things are similar, buying a home from SFCLT is different is some ways.</h4>
            <h4>In particular, this is an opportunity to purchase a home for a reduced price.</h4>
            <h4>Additionally, you would not own the land and you will share the equity when you resell</h4>
            <h4>the home so it remains affordable for the next buyer.
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideYesModal}>Learn How</Button>
          </Modal.Footer>
        </Modal>
       
        <Modal
          {...this.props}
          show={this.state.showNo}
          onHide={this.hideNoModal}
          dialogClassName="custom-modal"
        >
          <Modal.Body>
            <h2>That is right!</h2>
            <h4>While many things are similar, buying a home from SFCLT is different in some ways.</h4>
            <h4>In particular, this is an opportunity to purchase a home for a reduced price.</h4>
            <h4>Additionally, you would not own the land and you will share the equity when you resell</h4>
            <h4>the home so it remains affordable for the next buyer.</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideNoModal}>Learn More</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
 
export default Slide10;