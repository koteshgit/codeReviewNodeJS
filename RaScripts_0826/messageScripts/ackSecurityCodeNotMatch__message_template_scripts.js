var items = context.getOrdersDetails?.response?.body.orders || context.getSpecificOrder?.response?.body.orders|| []

var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Select your item",
        "showMore": "true",
        "showMoreTitle": "Show More", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements": []
    }
}

var elements = []
var fullLength = items.length;

for (let i = 0; i < fullLength; i++) {
    
    
    context.orderDate = items[i].created_at.split("T")[0]
  
     elements.push({
        "icon": "https://retail-assist.s3.amazonaws.com/resources/images/RetailAssist/shoppingCartSVG.svg",
        "title": "Order ID : "+items[i].id,
        "flag":"cancelOrderTemplate", 
        "values": [
            {
                "title":"Date : ",
                "value":context.orderDate,
                "style": {
                    "color": "#344054"
                }
            },
            {
                "title": "Order Price : ",
                "value": getFormattedCurrency(items[i].current_subtotal_price)
            },
        ],
        "actions": {
            "type": "postback",
            "title": "You have selected order number : "+items[i].id,
            "value":  items[i].id.toString()
        }
    })
}
message.payload.elements = elements;
var len = Math.min(3,message.payload.elements)
agentMsg =""
for (let i = 0; i < len.length; i++) {
  let ele = message.payload.elements[i];
  agentMsg += "________________________________\n"
  agentMsg += ele.title + "\n";
  agentMsg += ele?.values[0]?.title + "    " + ele?.values[0]?.value + "\n";
  agentMsg += ele?.values[1]?.title + "    " + ele?.values[1]?.value + "\n";
}
message["text"] = agentMsg;

context.totalItems = elements.length
print(JSON.stringify(message));
