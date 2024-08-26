var info = ["Connect to Agent"];
var payload = ["Agent Transfer"];

var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "I’m sorry, but there are no items in this order eligible for cancelation"
    },
    "action": {
        "buttons": []
    }
};
for (let i = 0; i < info.length; i++) {
    // if the button is to send back text to platform
    var button = {
        "type": "REPLY",
        "id": payload[i],
        "title": info[i]
    };

    message.action.buttons.push(button);
}
print(JSON.stringify(message));
