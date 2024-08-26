var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "Hmm... I couldn't find any item on your account that qualify for refund. 🤔"
    },
    "action": {
        "buttons": [
            {
                "type": "REPLY",
                "id": "Login with another account",
                "title": "Try Other Account"
            },
            {
                "type": "REPLY",
                "id": "Connect to Agent",
                "title": "Connect to Agent"
            }
        ]
    }
}
print(JSON.stringify(msg));
