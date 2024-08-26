
    const noOfOrderItems = () => {
        if(context.entities.orderId && context.getSpecificOrder?.response?.statusCode == 200){
    context.orderData = context.getSpecificOrder.response.body.order
}else{ if(context.entities.recentOrders){
    context.orderData = context.getOrdersDetails.response.body.orders.find(order => order.id == context.entities.recentOrders)
}    
else{
    context.orderData = context.getOrdersDetails.response.body.orders[0]
}
}
context.orderStatusId=context.orderData.id
var skus=[]
for(i=0;i<context.orderData.line_items.length;i++){
    skus.push(context.orderData.line_items[i].sku)
}
context.skuQuery=JSON.stringify({
    "skus":skus
})
    }

