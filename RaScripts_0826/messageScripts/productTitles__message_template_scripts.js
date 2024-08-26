var quickReplies = ["Try other Account", "Connect to Agent"];
var payload = ["Login with another account", "Connect to Agent"]
var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "I couldn't find any orders associated with this account."
    },
    "action": {
        "buttons": []
    }
};
for (i = 0; i < quickReplies.length; i++) {
    // if the button is to send back text to platform
    var button = {
        "type": "REPLY",
        "id": payload[i],
        "title": quickReplies[i]
    };

    message.action.buttons.push(button);
}
print(JSON.stringify(message));
