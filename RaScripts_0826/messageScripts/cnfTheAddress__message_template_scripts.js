if(context.fetchDeliveryAddressDetails.response.body.addresses.length==1){

var info = ["Yes", "Add a New address"];
}else{
var info = ["Yes","Chosse Another address", "Add a New address"];
    
}
var message = {
    "type": "template",
    "payload": {
        "template_type": "button",
        "text": content.SOP_cnfAddress,
        "buttons": []
    }
};

for (i = 0; i < info.length; i++) {
    var button = {
        "type": "postback",
        "title": quickReplies[i],
        "payload": quickReplies[i]
    };
    message.payload.buttons.push(button);
}
print(JSON.stringify(message));

