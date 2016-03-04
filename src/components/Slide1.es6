import React from 'react';
import QuizActions from '../actions/QuizActions';
import AppConstants from '../constants/QuizConstants';
import QuizFluxStore from '../stores/QuizFluxStore';
import Slide from './Slide.es6';

function getText(){
    var returnText = "";
    $.ajax("testScrape.html").done(function(text){
      returnText=$(text).find('#myText').text();
      console.log('text was: '+ returnText);
    });
  //   request('testScrape.html', function(err, resp, body){
  //   if(!err && resp.statusCode == 200){
  //     /var $ = cheerio.load(body)
  //     returnText =  $("#slide1").text();
  //     $('span.id', '#slide1').each(function(){
  //       var url = $(this).attr('href');
  //       urls.push(url);
  //     });
  //     console.log(urls);
  //   }
  // });
    return {slideText: returnText};
}


class Slide1 extends Slide {
    constructor() {
    super();
    this.state = getText();
  }


  yesNoClick(selection){
    QuizFluxStore.setYesNoResponse(selection);
    QuizActions.moveSlide(AppConstants.GOTO_NEXT);
  }

  render() {
    return (
      <li id="slide1">
      <div className="slideText">
      {this.state.slideText}
      Are you interested in purchasing a home but having trouble affording the costs, 
      saving for a down payment, or competing with investors?
      </div>
      <div id="yesNoButtons">
        <div className="actionButton" onClick={this.yesNoClick.bind(this,"NO")}>NO</div>
        <div className="actionButton" onClick={this.yesNoClick.bind(this,"YES")}>YES</div>
      </div>
      </li>
    );
  }

}


export default Slide1;
