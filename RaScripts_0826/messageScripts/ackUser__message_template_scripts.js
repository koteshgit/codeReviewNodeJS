if (Object.keys(context.docLinks).length == 0) {
    print(context.response); 
} else {
    var info = Object.keys(context.docLinks);
    var message = {
        "type": "template",
        "payload": {
            "template_type": "button", 
            "text": context.response,
            "buttons": []
        }
    };

    for (var i = 0; i < info.length; i++) {
        var button = {
            "type": "web_url",
            "url": context.docLinks[info[i]], 
            "title": info[i]
        };
        message.payload.buttons.push(button);
    }
    print(JSON.stringify(message));  
}

