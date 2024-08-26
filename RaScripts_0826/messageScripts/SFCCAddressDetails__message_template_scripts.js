var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "Hmm... I can see that the refund for this item has already been processed to your account ending with 5679"
    },
    "action": {
        "buttons": [
            {
                "type": "REPLY",
                "id": "Connect me to an agent",
                "title": "Connect me to an agent"
            }
        ]
    }
}
print(JSON.stringify(msg));
