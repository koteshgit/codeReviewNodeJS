var info = ["Use Phone Number", "Sign Up"];
var txt = "Please enter your email ID."
if (context?.noUserLoginTries > 0) {
    txt = "Sorry, what’s your email ID?"
}
var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": txt
    },
    "action": {
        "buttons": []
    }
}

for (i = 0; i < info.length; i++) {
    var button = {
        "type": "REPLY",
        "id": info[i],
        "title": info[i]
    };

    msg.action.buttons.push(button);
}
print(JSON.stringify(msg));
