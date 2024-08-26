if(Object.keys(context.docLinks).length == 0){
    print(context.response);
}
else{
    
    var info = Object.keys(context.docLinks);
    var message = {
        "type": "template",
        "payload": {
            "template_type": "button",
            "template":"documentTemplate",
            "text": context.response,
            "buttons": []
        }
    };
    for (i = 0; i < info.length; i++) {
    // if the button is to send back text to platform
    // var button = {
    //     "type": "web_url",
    //     "title": info[i],
    //     "payload": context.docLinks[i]
    // };

        var button = {
        "type":"web_url", // type can be "postback" if
        "url":context.docLinks[info[i]],
        "title":info[i]
        };

        message.payload.buttons.push(button);
    }
    print(JSON.stringify(message));
}
