
var items = context.eligibleLineItems || []
var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/list",
    "body": {
        "text": "List of items"
    },
    "action": {
        "title": "Select your item",
        "sections": [
            {
                "rows": []
            }
        ]
    }
};

let whatsAppLineItems = {};
for(i=0 ; i<items.length && i<10; i++){
    let desc = items[i].name + getFormattedCurrency(items[i].price);
    
    let buttonImg = {
        "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/buttons",
        "header": {
            "type": "IMAGE",
            "mediaUrl": items[i].imageUrl||"https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png",
        },
        "body": {
            "text": `*Product Name*: ${items[i].name}\n*Item Id*: ${items[i].id}\n*Item Price*: ${getFormattedCurrency(items[i].price)}\n*Arriving On*: ${getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000))}`
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
        },
        "footer": {
            "text":"Is this the item you want to cancel?"
        }
    }
    whatsAppLineItems[items[i].id] = JSON.stringify(buttonImg);
    message.action.sections[0].rows.push({
        "id": items[i].id,
        "title": items[i].id,
        "description": desc?.substring(0,72)
    })
}

context.whatsAppLineItems = whatsAppLineItems;
print(JSON.stringify(message)); 
