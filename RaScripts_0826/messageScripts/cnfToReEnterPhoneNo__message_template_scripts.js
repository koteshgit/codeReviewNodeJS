// var quickReplies = ["Yes", "No","Sign Up"];
var quickReplies = ["Yes","Sign Up"];

text = "I couldn't find that phone number in the system. Want to try with a different phone number?";
var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": text
    },
    "action": {
        "buttons": []
    }
}

for (i = 0; i < quickReplies.length; i++) {
    var quickReply = {
        "type": "REPLY",
        "id": quickReplies[i],
        "title": quickReplies[i]
    };
    msg.action.buttons.push(quickReply);
}
print(JSON.stringify(msg));
