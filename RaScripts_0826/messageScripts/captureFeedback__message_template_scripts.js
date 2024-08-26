var message={
  "type": "template",
  "payload": {
    "text": "How likely are you to recommend our products or services to others?",
    "template_type": "feedbackTemplate",
    "view": "ThumbsUpDown",
    "sliderView": false,
    "messageTodisplay": "Glad you liked the experience. Thanks!"
  }
};
//Todisplaythetemplateinslider,changethevalueofsliderViewtotrue
var displayValues=[
  {
    "value": "Like",
    "id": "positive"
  },
  {
    "value": "Dislike",
    "id": "negative"
  }
];//ThenumberofelementsyouhaveunderdisplayValuesshouldalwaysbe2//Irrespectiveoftheorderofvaluesinthearray,theorderintheUIwillbe"Extremely Likely"and"Extremely Unlikely"
message.payload.thumpsUpDownArrays=[];
for(var i=0;i<=1;i++){
  var thumpsUpDownArray={
    "thumpUpId": displayValues[i].id,
    "value": displayValues[i].value,
    "reviewText": displayValues[i].value
  };
  message.payload.thumpsUpDownArrays.push(thumpsUpDownArray);
}
print(JSON.stringify(message));
