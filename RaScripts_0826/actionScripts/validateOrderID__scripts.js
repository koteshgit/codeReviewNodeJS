
    const validateOrderID = () => {
        if(context.getOrdersDetails.response.body.orders.find(order=>order.id % 10000==parseInt(context.entities.ivrOrderId||context.entities.hIvrOrderId))){
    context.isValidOrder=true
    if(context.orderStatus.find(order=>order.id % 10000==parseInt(context.entities.ivrOrderId||context.entities.hIvrOrderId))){
      context.isValidReturnOrder=context.orderStatus.find(order=>order.id % 10000==parseInt(context.entities.ivrOrderId||context.entities.hIvrOrderId))
    }
}

if(context?.isValidReturnOrder?.result.length>2){
    number=[]
    for(i=1;i<=context.isValidReturnOrder.result.length;i++){
        number.push(i.toString())
    }
    
    context.number=convertToEnumObj(number)
    context.number.push({
    "name":"all",
    "val":"all",
    "syn":"all"
})
}
    }

