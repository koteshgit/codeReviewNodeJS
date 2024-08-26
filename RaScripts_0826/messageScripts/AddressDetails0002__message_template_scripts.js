txt="I'm sorry, but item in this order is not eligible for return."
if(context.orderData.line_items.length>1){
    txt="I'm sorry, but items in this order are not eligible for return."
}
var quickReplies = ["Connect me with an Agent"];
var message = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": txt,
        "subText": "Button Template Description",
        "buttons": []
    }
};
for (i = 0; i < quickReplies.length; i++) {
    // if the button is to send back text to platform
    var button = {
        "type": "postback",
        "title": quickReplies[i],
        "payload": quickReplies[i]
    };

    /* Uncomment this if the button is to redirect to url
     var button = {
     "type":"web_url", // type can be "postback" if
     "url":"URL_TO_REDIRECT",
     "title":buttons[i]
     };
     */

    message.payload.buttons.push(button);
}
print(JSON.stringify(message));




// txt="I'm sorry, but item in this order are not eligible to return."
// if(context.orderData.line_items.length>1){
//     txt="I'm sorry, but items in this order are not eligible to return."
// }

// var quickReplies = ["Connect me with an Agent"];
// var message = {
//     "type": "template",
//     "payload": {
//         "template_type": "quick_replies",
//         "text": txt,
//         "quick_replies": []
//     }
// };

// for (i = 0; i < quickReplies.length; i++) {
//     //if only text needs to diplayed
//     var quickReply = {
//         "content_type": "text",
//         "title": quickReplies[i],
//         "payload": quickReplies[i]
//     };
//     /* Uncomment this if both text and image needs to displayed for the  quick reply button
//      var quickReply = {
//      "content_type":"text",
//      "title":quickReplies[i],
//      "payload":"payload2",
//      "image_url": "url of the image
//      };
//      */
//     message.payload.quick_replies.push(quickReply);
// }
// print(JSON.stringify(message));
