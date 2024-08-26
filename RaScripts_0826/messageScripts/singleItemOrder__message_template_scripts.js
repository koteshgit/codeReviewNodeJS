var info = ["Connect to agent" , "Show all orders"];

var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "Hmm...I don't see any order on your account eligible for cancellation."
    },
    "action": {
        "buttons": []
    }
};
for (i = 0; i < info.length; i++) {
    // if the button is to send back text to platform
    var button = {
        "type": "REPLY",
        "id": info[i],
        "title": info[i]
    };

    message.action.buttons.push(button);
}
print(JSON.stringify(message));
