import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Slide2 extends React.Component {

  state = {
    showYes: false,
    showNo: false,
    clickHandler: this.changeSlide
  }

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
  }

  hideYesModal = () => {
    this.setState({showYes: false});
    console.log(this.props.nextSlide);
    this.props.nextSlide(this.state.slideOptions);
  }

  showNoModal = () => {
    this.setState({showNo: true});
  }

  hideNoModal = () => {
    this.setState({showNo: false});
  }

  render() {
    return (
      <div className='slide2'>
        <div className='jumbotron' >
          <div className='container'>
            <img src='images/SFCLT_logo_standard_FULL-1024x382.png' width='60%' />
          </div>
        </div>
        <div className='containerContent'>
          <h3>South Florida CLT provides housing using the Community Land Trust(CLT) model. In a CLT,
           homes are sold at an affordable price to income qualified households.</h3>
          <button className='btn-yesNo' onClick={this.showYesModal}>Income Qualifed</button>
          <button className='btn-yesNo' onClick={this.showNoModal}>Affordable Price</button>
        </div>
        <Modal
          {...this.props}
          show={this.state.showYes}
          onHide={this.hideYesModal}
          dialogClassName="custom-modal"
        >
          <Modal.Body>
            <h2>Income Qualifed:</h2>
            <h4>South FLorida CLT reserves homes for low ,moderate, middle income households earning up to 120% of the Area Median Income. </h4>
            <h4>At the end of this tutorial, look for a link to local income-limits to see if you qualify.
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
            <h2>Affordable Price:.</h2>
            <h4>In a market where average rents are skyrocketing, most South Florida CLT homeowners spend between
             $500 and $1,000 dollars a month on their combined housing costs.</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideNoModal}>Learn More</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Slide2;