
    const parseOrderDeatils = () => {
        if(context.entities.hIvrOrderId){
    order=context.getCancelableItems.response.body.eligibleOrders.find(order=>order.id % 10000==context.entities.hIvrOrderId)
}
if(context.getCancelableItems.response.body.eligibleOrders.length==1){
    order=context.getCancelableItems.response.body.eligibleOrders[0]
}
if(order.line_items.length==1){
        context.singleOrderItem=order
        context.orderIdToCancel=order.id
}else{
    context.multiItemOrder=order
}
    }

