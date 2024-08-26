
    const prepEnums = () => {
        // Extract the first 10 orders from the response body and assign them to orderDetails.
var orderDetails = context.getOrdersDetails?.response?.body?.orders.slice(0, 10)
items = []
genAiPrompt = []
for (i = 0; i < orderDetails.length; i++){
    // Go through each line item in the current order.
    for(j=0;j<orderDetails[i]?.line_items.length ; j++){
        items.push(orderDetails[i]?.line_items[j]?.id+'&'+orderDetails[i]?.id)
        genAiPrompt.push({
            "orderId" : orderDetails[i].id,
            "itemName" : orderDetails[i]?.line_items[j].name,
            "lineItemId" : orderDetails[i]?.line_items[j].id,
            "date": orderDetails[i].created_at.split('T')[0]
        })
    }
}
//Enumerating the data for extracting entities like item id's and product title.
context.itemsId = convertToEnumObj(items)
context.productTitle = convertToEnumObj(orderDetails?.flatMap(order => order.line_items.map(item => item.name)));
context.data = genAiPrompt

context.isDigitalGenAIEnabled = env.isDigitalGenAIEnabled

//Present Date --==
context.date = new Date()

    }

