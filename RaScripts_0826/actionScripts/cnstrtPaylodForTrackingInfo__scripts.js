
    const cnstrtPaylodForTrackingInfo = () => {
        if(!context.entities.multipleLineItems){
context.orderId = context.getOrdersDetails.response.body.orders[0].id
}
else{
    val = parseInt(context.entities.multipleLineItems)
    context.orderId = context.orderDetails[val-1].orderId
}

    }

