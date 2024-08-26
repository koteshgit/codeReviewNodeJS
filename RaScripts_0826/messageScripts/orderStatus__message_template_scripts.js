var orderDetails = context.getOrdersDetails.response.body.orders
var trackingStatus = context.getOrderTrackingInfo.response.body

if (context.entities.recentOrderItems) {
    for (let i = 0; i < orderDetails.length; i++) {
        itemNum = context.entities.recentOrderItems.split('&')[0]
        orderNum = context.orderId
        if (orderDetails[i].id == orderNum) {
            Item = []
            for (j = 0; j < orderDetails[i].line_items.length; j++) {
                if (orderDetails[i].line_items[j].id == itemNum) {
                    Item.push(orderDetails[i].line_items[j])
                }

            }
            orderDetails[i].line_items = Item
            orderDetails = orderDetails[i]
        }
    }
}
else { // to show all line items in the bot
    orderDetails = context.orderDetails

}

var elements = [];
var deliveryDateNeeded = ["fulfilled" , "Placed", "In Transit"]
var message = {
    "type": "template",
    "payload": {
        "template_type": "listWidget",
        "title": "Order",
        "description": "",
        "elements": []
    },
}
orderDate = orderDetails.created_at.split("T")[0]
elements.push({
    "subtitle": "Order Date  :   "+orderDate+"       \nOrder Id     :       " + orderDetails.id + "\nOrder Total  :       " + getFormattedCurrency(orderDetails.total_price) + " ("+ orderDetails.line_items.length + " Items)"
})
elements.push({"title":"Items"});
for (const orderItem of orderDetails.line_items) {
    const currentItem = {
        "image": {
            "image_type": "image",
            "image_src": context.imageSkuMap[orderItem.sku],
            "radius": 20,
            "size": "large"
        },
        "title": orderItem.name,
        "subtitle": "QTY: " + orderItem.quantity + " x $" + orderItem.price,
        "details": [{
            "description": "Sku : " + orderItem.sku
        }, {
            "description": "Item No: " + orderItem.id
        }]
    };

    if (trackingStatus[orderItem.id]?.trackingUrl) {
        currentItem.details.unshift({
            "description": "Status : " + trackingStatus[orderItem.id].status
        });

        currentItem.default_action = {
            "type": "postback",
            "payload": trackingStatus[orderItem.id]?.trackingUrl
        };

        elements.push(currentItem);
    } else if (trackingStatus[orderItem.id]?.status) {
        currentItem.details.unshift({
            "description": "Status : " + trackingStatus[orderItem.id].status
        });

        elements.push(currentItem);
    } else {
        const futureDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
        estimatedDate = futureDate.toString();
        currentItem.details.unshift({
            "description": "Estimated Delivery : " + estimatedDate
        });

        elements.push(currentItem);
    }
}

elements.push({
    "title": "Order Summary",
    "subtitle": "Item total      " + getFormattedCurrency(orderDetails.total_line_items_price) + "\nTax                  "+getFormattedCurrency(orderDetails.total_tax)+"\nTotal               " + getFormattedCurrency(orderDetails.total_price) + "\nDiscount      "+getFormattedCurrency(orderDetails.total_discounts), 
    "title": "Order Total:     " + getFormattedCurrency(orderDetails.total_price)
})
message.payload.elements = elements;
print(JSON.stringify(message));
