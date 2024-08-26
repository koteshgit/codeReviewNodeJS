var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "I still can't find it. Want to log in with a phone number?"
    },
    "action": {
        "buttons": [
            {
                "type": "REPLY",
                "id": "Yes",
                "title": "Yes"
            },
            {
                "type": "REPLY",
                "id": "No",
                "title": "No"
            },
            {
                "type": "REPLY",
                "id": "Sign Up",
                "title": "Sign Up"
            }
        ]
    }
}
print(JSON.stringify(msg));
