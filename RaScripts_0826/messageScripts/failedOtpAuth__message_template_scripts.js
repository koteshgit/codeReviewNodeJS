var quickReplies = ["Sign Up", "Connect me with an Agent"];
var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "I couldn't sign you in with that either. Reach out to us again in future. Have a good rest of your day!"
    },
    "action": {
        "buttons": []
    }
};

for (i = 0; i < quickReplies.length; i++) {
    //if only text needs to diplayed
    var quickReply = {
        "type": "REPLY",
        "id": quickReplies[i],
        "title": quickReplies[i]
    };
    message.action.buttons.push(quickReply);
}
print(JSON.stringify(message));

