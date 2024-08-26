var items = context.eligibleOrders;
var data;
try {
    data = JSON.stringify(context.GenerativeAINode.GenAIPromptCancelAnOrder);

} catch (error) {
    koreDebugger.log("Error stringifying data: " + error.message);
}

var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/list",
    "body": {
        "text": "List of orders"
    },
    "action": {
        "title": "Please select one",
        "sections": [{
            "rows":[]
        }]
    }
}

var elements = []
var fullLength = items.length;
for (let i = 0; i < fullLength && i<10; i++) {
        var orderDate = items[i].created_at.split("T")[0]
        message.action.sections[0].rows.push({
                id: items[i].id.toString(),
                title:"Order ID : "+items[i].id,
                description:"Order Date: "+orderDate+"\nOrder Price : "+getFormattedCurrency(items[i]?.current_subtotal_price)
        });

}

print(JSON.stringify(message));

