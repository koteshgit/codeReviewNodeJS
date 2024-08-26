var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/list",
    "body": {
        "text": "May I know the reason for the cancellation?"
    },
    "action": {
        "title": "Select your reason",
        "sections": [
            {
                "rows": []
            }
        ]
    }
};
message.action.sections[0].rows = [
        {
            "title": "Changed Mind",
            "id": "Changed Mind"
        },
        {
            "title": "Price Concerns",
            "id": "Price Concerns"
        },
        {
            "title": "Shipping Delays",
            "id": "Shipping Delays"
        },
        {
            "title": "Quality Concerns",
            "id": "Quality Concerns"
        },
        {
            "title": "Payment Issues",
            "id": "Payment Issues"
        },
        {
            "title": "Miscommunication",
            "id": "Miscommunication"
        },
        {
            "title": "Personal Emergency",
            "id": "Personal Emergency"
        },
        {
            "title": "Unsatisfactory Service",
            "id": "Unsatisfactory Customer Service"
        },
        {
            "title": "Delivery Issues",
            "id": "Delivery Issues"
        },
        {
            "title": "Others",
            "id": "Others"
        }
    ]
print(JSON.stringify(message));
