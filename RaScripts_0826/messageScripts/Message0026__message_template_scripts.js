var info = context.session.BotUserSession.UserInfo;
var image = "https://retail-assist.s3.amazonaws.com/resources/images/RetailAssist/profile.png";
var message = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "Personal Information",
            "buttons": []
        }
    }
};

var elements = [{
        "icon": image,
        "title": "Name",
        "flag": "addressTemplate",
        "values": [{
            "title": info.first_name + " " + info.last_name,
            "style": {
                "color": "#344054"
            }
        }],
        "actions": {
            "type": "postback",
            "title": "Edit Name",
            "value": "Name"
        }
    },
    {
        "icon": image,
        "title": "Email ID",
        "flag": "addressTemplate",
        "values": [{
            "title": info.email,
            "style": {
                "color": "#344054"
            }
        }],
        "actions": {
            "type": "postback",
            "title": "Edit email",
            "value": "Email"
        }
    },
    {
        "icon": image,
        "title": "Phone Number",
        "flag": "addressTemplate",
        "values": [{
            "title": info.phone,
            "style": {
                "color": "#344054"
            }
        }],
        "actions": {
            "type": "postback",
            "title": "Edit phone number",
            "value": "Phone Number"
        }
    }
];

elements.forEach(function(element) {
    message.attachment.payload.buttons.push({
        "type": "postback",
        "title": element.title,
        "payload": element.actions.value
    });
});

print(JSON.stringify(message));

