var msg = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/list",
    "body": {
        "text": "List of items"
    },
    "action": {
        "title": "Please select one",
        "sections": [{
                "rows":[]
            }]
    }
}

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


var info=context.getOrdersDetails.response.body.orders
var elements = []
if(!context?.displayCount){
    context.displayCount=0
}

var data;
try {
    data = JSON.stringify(context.GenerativeAINode.GenAIPromptReturnOrRefundStatus);
} catch (error) {
    koreDebugger.log("Error stringifying data: " + error.message);
}


if (!data || !env.isDigitalGenAIEnabled || data?.includes(null)) {
    for (var i = context.displayCount; i < info.length && i<10; i++) {
        msg.action.sections[0].rows.push({
                id: "You have selected order number : " + info[i].id.toString(),
                title:"Order ID : " +info[i].id,
                description:"Order Date : " + info[i].created_at.split("T")[0] + "\nOrder Price : " + getFormattedCurrency(info[i]?.current_subtotal_price)
        })
        elements.push({
            "icon": "https://retail-assist.s3.amazonaws.com/resources/images/RetailAssist/shoppingCartSVG.svg",
            "title": "Order ID : " + info[i].id,
            "flag": "cancelOrderTemplate",
            "values": [
                {
                    "title": "Order Date : ",
                    "value": info[i].created_at.split("T")[0],
                    "style": {
                        "color": "#344054"
                    }
                },
                {
                    "title": "Order Price : ",
                    "value": getFormattedCurrency(info[i]?.current_subtotal_price)
                },
            ],
            "actions": {
                "type": "postback",
                "title": "You have selected order number : " + info[i].id,
                "value": info[i].id.toString()
            }
        })
    }
} else {
    for (i = context.displayCount; i < info.length && i<10; i++) {
        if (data?.includes(info[i].id.toString())) {
            msg.action.sections[0].rows.push({
                id: "You have selected order number : " + info[i].id.toString(),
                title: "Order ID : " + info[i].id,
                description: "Order Date : " + info[i].created_at.split("T")[0] + "\nOrder Price : " + getFormattedCurrency(info[i]?.current_subtotal_price)
            })
            elements.push({
                "icon": "https://retail-assist.s3.amazonaws.com/resources/images/RetailAssist/shoppingCartSVG.svg",
                "title": "Order ID : " + info[i].id,
                "flag": "cancelOrderTemplate",
                "values": [
                    {
                        "title": "Order Date : ",
                        "value": info[i].created_at.split("T")[0],
                        "style": {
                            "color": "#344054"
                        }
                    },
                    {
                        "title": "Order Price : ",
                        "value": getFormattedCurrency(info[i]?.current_subtotal_price)
                    },
                ],
                "actions": {
                    "type": "postback",
                    "title": "You have selected order number : " + info[i].id,
                    "value": info[i].id.toString()
                }
            })
        }
    }
}

// Assuming you want to set 'elements' to some payload property as in the 1st code
message.payload.elements = elements;


var len = Math.min(3,info.length)
var agentMsg = "Select your Order\n";
for (let i = 0; i < len; i++) {
  agentMsg += "________________________________\n"
  let ele = message.payload.elements[i];
  agentMsg += ele.title + "\n";
  agentMsg += ele.values[0].title + " " + ele.values[0].value + "\n";
  agentMsg += ele.values[1].title + " " + ele.values[1].value + "\n";

}
message["text"] = agentMsg;


context.totalItems = elements.length
print(JSON.stringify(msg));

