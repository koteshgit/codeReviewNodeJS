var quickReplies = ["show all Orders","Connect me with agent"]
var payload = ["allOrders","agent"]
if(context.orderData.orderItems.length == 1)
    var quickReplies = ["Connect me with agent"];
    var payload  = ["agent"]
var message = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "I'm sorry,but this item is not eligible for return",
        "buttons": []
    }
};

for (i = 0; i < quickReplies.length; i++) {
    //if only text needs to diplayed
    var quickReply = {
        "type": "postback",
        "title": quickReplies[i],
        "payload": payload[i]
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

