var message = {
    "activities": [{
            "type": "event",
            "name": "config",
            "sessionParams": {
                "bargeIn": true,
                "userNoInputTimeoutMS":60000,
                "botNoInputTimeoutMS":120000,
                "userNoInputGiveUpTimeoutMS":300000
               },
            "id": new Date().getTime() + 200,
            "timestamp": new Date().toISOString()
        },
        {
            "type": "message",
            "text": "Sure.",
            "timestamp": new Date().toISOString(),
            "id": new Date().getTime()
        }

    ]
};
print(JSON.stringify(message));
