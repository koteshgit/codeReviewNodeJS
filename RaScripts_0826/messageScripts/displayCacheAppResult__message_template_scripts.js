if(context.appResponse.references){
    var titles = Object.keys(context.appResponse.references);
    var message = {
        "type": "template",
        "payload": {
            "template_type": "button",
            "fromCache": true,
            "text": context.appResponse.content,
            "buttons": []
        }
    };
    for (var i = 0; i < titles.length; i++) {
        var button = {
            "type": "web_url",
            "url": context.appResponse.references[titles[i]], 
            "title": titles[i]
        };
        message.payload.buttons.push(button);
    }
    

}else{
    var message = {
        "type": "template",
        "payload": {
            "template_type": "button",
            "fromCache": true,
            "text": context.appResponse.content
        }
    }
}
print(JSON.stringify(message))

