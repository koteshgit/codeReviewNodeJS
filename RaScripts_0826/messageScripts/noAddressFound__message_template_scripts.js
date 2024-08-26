var info = ["Login to another account", "Add Address"];
var message = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": "Hmm... I don't see any address linked to this account.",
        "buttons": []
    }
};

for (i = 0; i < info.length; i++) {
    var button = {
        "type": "postback",
        "title": info[i],
        "payload": info[i]
    };
   
    message.payload.buttons.push(button);
}
print(JSON.stringify(message));

