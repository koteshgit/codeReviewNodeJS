
    const Script0004 = () => {
        orders=context.getOrdersDetails.response.body.orders.slice(0,10)
context.orderIds=orders.map(obj => obj.id)
if(orders.find(order=>order.id== context.entities.hIvrOrderId)){
    context.orderIds=[orders.find(order=>order.id== context.entities.hIvrOrderId).id]
}
context.orderIdsPayload=JSON.stringify({
    "orderIds": context.orderIds
})
    }

