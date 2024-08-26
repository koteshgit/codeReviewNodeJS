var quickReplies = ["Sign Up", "Connect me with an Agent"];
var message = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "I couldn't sign you in with that either. Reach out to us again in future. Have a good rest of your day!",
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
    message.payload.buttons.push(quickReply);
}
print(JSON.stringify(message));

