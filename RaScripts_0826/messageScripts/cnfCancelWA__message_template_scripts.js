var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "Is this the item you want to cancel?"
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
            }
        ]
    }
}
print(JSON.stringify(msg));
