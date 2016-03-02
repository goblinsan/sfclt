import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
 
class Slide14 extends React.Component {
 
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
      <div className='slide14'>
        <div className='jumbotron' >
          <div className='container'>
            <img src='images/SFCLT_logo_standard_FULL-1024x382.png' width='60%' />
          </div>
        </div>
        <div className='container'>
          <h3>Wrap-up slide</h3>
          <h4><a href="http://southfloridaclt.org/contact/" target="_blank"> Contact us</a> to find out more.</h4>
          <button className='btn-yesNo' onClick={this.showYesModal}>Yes</button>
          <button className='btn-yesNo' onClick={this.showNoModal}>No</button>
        </div>
        <Modal
          {...this.props}
          show={this.state.showYes}
          onHide={this.hideYesModal}
          dialogClassName="custom-modal"
        >
          <Modal.Body>
            <h2>We get it.</h2>
            <h4>Purchasing a home takes a lot of hard work, especially in a high-cost market like South Florida.</h4>
            <h4>Luckily, South Florida Community Land Trust (SFCLT) might have a solution for you.
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
            <h2>No Problem.</h2>
            <h4>Owning a CLT home isn't for everyone.
            South Florida Community Land Trust (SFCLT) also offers afordable rentals.</h4>
            <h4><a href="http://southfloridaclt.org/contact/" target="_blank"> Contact us</a> to find out more.</h4>
            <h4>If you're still interested in learning more about SFCLT home ownership,
            keep reading to learn how SFCLT can help.
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideNoModal}>Learn More</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Slide14;