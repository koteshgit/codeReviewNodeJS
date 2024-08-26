var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
    "body": {
        "text": "Sorry it appears that you are already logged in and attempting to log in again."
    },
    "action": {
        "buttons": [{
            "type": "REPLY",
            "id": "Login with another account",
            "title": "Sign in as another"
        }]
    }
}
print(JSON.stringify(msg));
// print(JSON.stringify(msg));
// print(JSON.stringify(msg));
