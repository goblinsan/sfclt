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
    	<RollOver icon="dollarIcon.png" slide="7" itemNumber="1" iconLocation={['35vw','30vh']} textPosition="left" />   
   		<RollOver icon="dollarIcon.png" slide="7" itemNumber="4" iconLocation={['17vw','45vh']} textPosition="top-left" />  
    	<RollOver icon="dollarIcon.png" slide="7" itemNumber="5" iconLocation={['82vw','45vh']} textPosition="top-left" />  
    	<RollOver icon="dollarIcon.png" slide="7" itemNumber="3" iconLocation={['55vw','26vh']} textPosition="top-left" />  
		<RollOver icon="dollarIcon.png" slide="7" itemNumber="2" iconLocation={['65vw','20vh']} textPosition="right" />  
      </div>
    );
  }
}

export default Interactions; 