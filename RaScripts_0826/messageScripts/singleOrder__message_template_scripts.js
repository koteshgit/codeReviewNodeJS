var items = context.getOrdersDetails?.response?.body.orders

// var message = {
//     "type": "template",
//     "AlwaysShowGlobalButtons": false,
//     "payload": {
//         "template_type": "list",
//         "elements": [],
//         "buttons": []
//     }
// }

var elements = []
    // elements.push({
    //     "title": items[0].id,
    //     "image_url": "https://shorturl.at/fxALM",
    //     "subtitle": "Order Date " + items[0].created_at.split("T")[0],//text
        
    // })
    
    var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Select your item",
        "showMore": "true",
        "showMoreTitle": "show More", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements": []
    }
}
    elements.push({
        "icon": "https://cdn-icons-png.flaticon.com/512/825/825500.png",
        "title": "Order ID : "+items[0].id,
        "flag":"cancelOrderTemplate", 
        "values": [
            {
                "title":"Date : ",
                "value":items[0].created_at.split("T")[0],
                "style": {
                    "color": "#344054"
                }
            },
            {
                "title": "Order Price : ",
                "value": getFormattedCurrency(items[0]?.current_subtotal_price)
            },
        ],
        // "actions": {
        //     "type": "postback",
        //     "title": "You have selected order number : "+items[i].id,
        //     "value":  items[i].id.toString()
        // }
    })

message.payload.elements = elements;
print(JSON.stringify(message));
