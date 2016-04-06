import React from 'react';
import Interactions from './Interactions.es6';

class Sky extends React.Component {

  render() {
    return (
      <div>
        <div id="sky">
          <img id="sun" src="images/sun.png" />
          <div id="clouds">
            <div className="cloud x1"><img src="images/Clouds.svg" /></div>
            <div className="cloud x2"><img src="images/Clouds.svg" /></div>
            <div className="cloud x3"><img src="images/cloud.png" /></div>
            <div className="cloud x4"><img src="images/cloud.png" /></div>
            <div className="cloud x5"><img src="images/Clouds.svg" /></div>
            <div className="cloud x6"><img src="images/cloud.png" /></div>
            <div className="cloud x7"><img src="images/cloud.png" /></div>
            <div className="cloud x8"><img src="images/cloud.png" /></div>
            <div className="cloud x9"><img src="images/cloud.png" /></div>
            <div className="cloud x10"><img src="images/cloud.png" /></div>
            <div className="cloud x11"><img src="images/cloud.png" /></div>
            <div className="cloud x12"><img src="images/cloud.png" /></div>
            <div className="cloud x13"><img src="images/Clouds.svg" /></div>
            <div className="cloud x14"><img src="images/Clouds.svg" /></div>
            <div className="cloud x15"><img src="images/Clouds.svg" /></div>
            <div className="cloud x16"><img src="images/Clouds.svg" /></div>
          </div>
          <img id="grassRowLeft" src="images/grassRow.png" /><img id="grassRowRight" src="images/grassRow.png" />
          <img id="house" src="images/House.svg" />
          <Interactions />
        </div>
      </div>
    );
  }
}

export default Sky;
