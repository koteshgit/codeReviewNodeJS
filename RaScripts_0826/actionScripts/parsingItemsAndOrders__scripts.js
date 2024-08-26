
    const parsingItemsAndOrders = () => {
        context.orders = context.getOrdersDetails?.response?.body.orders
context.productItems = [];
if(context.entities?.productTitles||context.entities?.hProductName){
    // Assigning the product name by checking productTitles,hProductName, and assign it to 'name'.
    name=context.entities?.productTitles||context.entities?.hProductName
    orders = []
    skus=[]
    itemIds=[]
    for(i=0 ; i<context.orders.length ; i++){
        // Initialize an array to hold line items that match the product name.
         line_items = []
        for(j=0;j<context.orders[i].line_items.length ; j++){
            lineItem = context.orders[i].line_items[j]
            // Check if the current line item's name matches either productTitles or hProductName.
            if((context.entities.productTitles == lineItem.name)||(context.entities.hProductName==lineItem.name)){
                line_items.push(lineItem)
                skus.push(lineItem.sku)
                itemIds.push(lineItem.id)
            }
        }
        if(line_items.length>0){
         // If there are matching items, add this order to the orders array with the matched items.
        orders.push({
            "id": context.orders[i].id,
            "created_at" : context.orders[i].created_at,
            "line_items" : line_items
        })
        }
    }
    // Once all orders are processed, check if we found any orders with matching line items.
    if(orders.length !=0){
        context.orders = orders
    }
    
    context.skuQuery=JSON.stringify({
    "skus":skus
})
    context.itemIds=convertToEnumObj(itemIds)
    
    context.itemIds.push({
    name: 'Show More',
    val: 'Show More',
    syn: ['Show More']
})
}


if(context?.GenerativeAINode?.GenAIPromptReturnOrRefundStatus) {
    var text = context.GenerativeAINode.GenAIPromptReturnOrRefundStatus.text
    var jsonString = text.replace(/^```json\n/, '').replace(/\n```$/, '');
    var parsedData = JSON.parse(jsonString);
    //if(parsedData.entities.length == 1) {
        var orderId = parsedData.entities[0].Order_ID[0];
        koreDebugger.log("Order id is " + orderId)
        if(orderId != "[null]")
            context.entities.hOrderId = orderId
    //}
}



    }

