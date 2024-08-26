
    const Script0001 = () => {
        orders=context.getOrdersDetails.response.body.orders.slice(0,10)
context.orderIds=orders.map(obj => obj.id)
if(orders.find(order=>order % 10000== context.entities.hIvrOrderId)){
    context.orderIds=[orders.find(order=>order % 10000== context.entities.hIvrOrderId).id]
}
context.orderIdsPayload=JSON.stringify({
    "orderIds": context.orderIds
})
    }

