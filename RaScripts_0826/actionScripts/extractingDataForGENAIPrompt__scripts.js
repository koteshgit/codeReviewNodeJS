
    const extractingDataForGENAIPrompt = () => {
        var arr = [];
var orderDetails = context.getCancelableItems?.response?.body?.eligibleOrders;

for (var i = 0; i < orderDetails.length; i++) {
    for (var j = 0; j < orderDetails[i].line_items.length; j++) {
        arr.push({
            "orderId": orderDetails[i].id,
            "lineItemId": orderDetails[i].line_items[j].id,
            "name": orderDetails[i].line_items[j].name,
            "date": orderDetails[i].created_at.split('T')[0] 
        });
    }
}
context.data = arr;

context.isGenAIEnabled = env.isGenAIEnabled
    }

