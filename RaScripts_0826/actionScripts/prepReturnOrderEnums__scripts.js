
    const prepReturnOrderEnums = () => {
        var orders=context.getOrdersDetails.response.body.orders
context.orderIds=[]
        context.orderIds.push(convertToEnumObj(orders.map((order) => order.id)))
context.orderIds.push({
    name: 'Show More',
    val: 'Show More',
    syn: [ "\"Show More\"" ]
})
context.orderIds=context.orderIds.flatMap(innerArray => innerArray)
    }

