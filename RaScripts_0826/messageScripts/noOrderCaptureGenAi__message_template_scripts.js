var info = ["Drop off", "Return to Store", "Return by Mail"];
var message = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "How do you want to return the item(s)?",
        "subText": "",
        "buttons": []
    }
};
for (i = 0; i < info.length; i++) {
    // if the button is to send back text to platform
    var button = {
        "type": "postback",
        "title": info[i],
        "payload": info[i]
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

