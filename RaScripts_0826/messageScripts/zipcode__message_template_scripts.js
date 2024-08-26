var returnRejectedReason=context.getOrderStatus.response.body[context.entities?.displayItems||context.entities?.showTitleMatchItems]
koreDebugger.log(typeof returnRejectedReason.returnRejectedReason)
switch(returnRejectedReason.returnRejectedReason){
    case "RETURN_PERIOD_ENDED":
        var mentionReason="you'r return period has ended" 
        break;
    case "FINAL_SALE":
        var mentionReason="you have returned final sale item"
        break;
    default: 
    var mentionReason=returnRejectedReason.returnRejectedNote
}
var quickReplies = ["connect me with an Agent"];
var message = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "However, I want to inform you that upon inspection, we noticed that the "+mentionReason+" Hence, we are unable to issue a refund for it.",
        "buttons": []
    }
};

for (i = 0; i < quickReplies.length; i++) {
    //if only text needs to diplayed
    var quickReply = {
        "type": "postback",
        "title": quickReplies[i],
        "payload": quickReplies[i]
    };
    /* Uncomment this if both text and image needs to displayed for the  quick reply button
     var quickReply = {
     "content_type":"text",
     "title":quickReplies[i],
     "payload":"payload2",
     "image_url": "url of the image
     };
     */
    message.payload.buttons.push(quickReply);
}
print(JSON.stringify(message));

