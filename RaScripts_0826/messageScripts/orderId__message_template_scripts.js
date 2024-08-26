var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "Login or Sign up"
    },
    "action": {
        "buttons": [
            {
                "type": "REPLY",
                "id": "Log in",
                "title": "Log in"
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
