import React from 'react';

class RolloverText extends React.Component {

  getText(itemId){
    let textIndex = itemId - 1;
    if (this.props.text.length >= textIndex){
      return $(this.props.text[textIndex]).html();
    } else {
      return '';
    }
  }

  render() {
    return (
      <div id={"rolloverText_"+ this.props.rolloverId} className="rolloverText" style={this.props.style}>
        <div dangerouslySetInnerHTML={{__html: this.getText(this.props.itemId)}} />
      </div>
    );
  }

}


export default RolloverText;
