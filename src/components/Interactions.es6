import React from 'react';
import RollOver from './RollOver.es6';
import Graphic from './Graphic.es6';

class Interactions extends React.Component {

  render() {
    return (
      <div id="interactionsContainer">
        <RollOver icon="dollarIcon.png" slide="3" itemNumber="1" iconLocation={['22vw','35vh']} textPosition="top-left" />
        <RollOver icon="priceTagIcon.png" slide="3" itemNumber="2" iconLocation={['64vw','30vh']} textPosition="right" />
        <Graphic icon="peopleIcon.png" slide="3" itemNumber="3" iconLocation={['28vw','50vh']} relWidth='4vw' />
      </div>
    );
  }
}

export default Interactions;