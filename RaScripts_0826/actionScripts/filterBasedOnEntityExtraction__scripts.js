
    const filterBasedOnEntityExtraction = () => {
        context.isIdEligible = false

if (context?.GenerativeAINode?.GenAIPromptCancelAnOrder?.text) {
    var text = context.GenerativeAINode.GenAIPromptCancelAnOrder.text
    var jsonString = text.replace(/^```json\n/, '').replace(/\n```$/, '');
    var parsedData = JSON.parse(jsonString);
    //if (parsedData.entities.length == 1) {
        var orderId = parsedData.entities[0].Order_ID[0];
        koreDebugger.log("Order id is " + orderId)
        if (orderId != "[null]")
            context.entities.orderId = orderId
    //}
}

// Retrieve eligible orders from the context's getCancelableItems method, if it exists
context.eligibleOrders =  context.getCancelableItems?.response?.body?.eligibleOrders
if(context.entities?.productTitles){
    eligibleOrder = []
    for(i=0 ; i<context?.eligibleOrders.length ; i++){
         eligibleLineItems = []
        for(j=0;j<context.eligibleOrders[i].line_items.length ; j++){
            lineItem = context.eligibleOrders[i].line_items[j]
            if(context.entities.productTitles == lineItem.name){
                eligibleLineItems.push(lineItem)
            }
        }
        // If there are eligible line items, construct a new order object with them
        if(eligibleLineItems.length!=0){
        eligibleOrder.push({
            "id": context.eligibleOrders[i].id,
            "created_at" : context.eligibleOrders[i].created_at ,
            "current_subtotal_price":context.eligibleOrders[i].current_subtotal_price,
            "line_items" : eligibleLineItems
        })
        }
    }
 // If there are eligible orders, updating the context with these orders
    if(eligibleOrder.length !=0){
        context.eligibleOrders = eligibleOrder
    }
}
// Alternatively, check if an order ID is present in the context entities
else if(context.entities?.orderId){
    for(i=0;i<context?.eligibleOrders.length ;i++){
        if(context.entities.orderId == context.eligibleOrders[i].id){
            context.entities.showOrders = context.eligibleOrders[i].id
            context.eligibleOrders = [context.eligibleOrders[i]]
            context.isIdEligible = true
        }
    }
}

    }

