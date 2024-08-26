var info = ["Log in", "Sign Up"];
var message = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "Sorry it seems that you are not logged in.",
            "buttons": []
        }
    }
};

for (i = 0; i < info.length; i++) {
    // if the button is to send back text to platform      
    var button = {
        "type": "postback",
        "title": info[i],
        "payload": info[i],
    }
    message.attachment.payload.buttons.push(button);
}
print(JSON.stringify(message));

