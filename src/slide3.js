import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
 
class Slide3 extends React.Component {
 
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
      <div className='slide3'>
        <div className='jumbotron' >
          <div className='container'>
            <img src='images/SFCLT_logo_standard_FULL-1024x382.png' width='60%' />
          </div>
        </div>
        <div className='containerContent'>
          <h3>CLT homeownership is structured a little differently than what you're probably used to.
          You, as a homebuyer, will purchase the house while we, the South Florida CLT, will maintain ownership of the land.
          Let's talk more about what that means.</h3>
          <button className='btn-yesNo' onClick={this.showYesModal}>Fact 1</button>
          <button className='btn-yesNo' onClick={this.showNoModal}>Fact 2</button>
        </div>
        <Modal
          {...this.props}
          show={this.state.showYes}
          onHide={this.hideYesModal}
          dialogClassName="custom-modal"
        >
          <Modal.Body>
            <h4>The price of a CLT is significantly reduced because you don't have to buy the land.
            This means your mortgage, taxes, and downpayment will also be much lower than if you purchased a home at market rates.</h4>
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
            <h4>It's important to know, that even though you won't own the land, you'll have full rights to use and access it.
            In other words, it's your property to use and enjoy.</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideNoModal}>Learn More</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
 
export default Slide3;