
    const prepEditOrderpayload = () => {
        var id = context.calculatedOrders.response.body?.data?.orderEditBegin?.calculatedOrder?.id
var calculatedId = id.split('/').pop()
var lineItemPayload = []
if(context.orderIdToCancel){
    order=context.getCancelableItems.response.body.eligibleOrders.find(order=>order.id==parseInt(context.orderIdToCancel))
    for(i=0;i<order.line_items.length;i++){
      lineItemPayload.push({
        "id": "gid://shopify/CalculatedLineItem/"+order.line_items[i].id,
        "quantity": 0
    })  
    }
   koreDebugger.log(JSON.stringify(lineItemPayload));
}
if(context.line_itemIdToCancel){
    lineItemPayload.push({
        "id": "gid://shopify/CalculatedLineItem/"+context.line_itemIdToCancel,
        "quantity": 0
    })  
}
var cancelReason=""
if(context.entities?.cancelReason){
    
cancelReason = context.entities.cancelReason
}else{
    cancelReason=context.session.BotUserSession?.lastMessage?.messagePayload?.message?.body||context.session.BotUserSession?.lastMessage?.messagePayload?.message?.text
}

context.editOrder = JSON.stringify({
    "calculatedOrderId" : calculatedId,
    "lineItems":lineItemPayload,
    "cancelreason" : cancelReason
    
})

   koreDebugger.log(context.editOrder);

    }

