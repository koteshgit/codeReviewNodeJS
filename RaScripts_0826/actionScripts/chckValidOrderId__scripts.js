
    const chckValidOrderId = () => {
        orders=context.getCancelableItems.response.body.eligibleOrders
var arr = []
if(context.entities?.hIvrOrderId){
context.validCancelableOrder=false    
if(orders.find(order=>order.id % 10000==parseInt(context.entities?.hIvrOrderId))){
    context.validCancelableOrder=true
}
}
names=[]
for(i=0;i<orders.length;i++){
for(j=0;j<orders[i].line_items.length;j++){
    names.push(orders[i].line_items[j].name)
    arr.push({
            "orderDate": orders[i].created_at.split("T")[0] , 
            "productTitle": orders[i].line_items[j].name,
            "orderId" : orders[i]?.id,
            "lineItem" : orders[i].line_items[j].id
        })
}
}
context.productNames=convertToEnumObj(names)
context.session.BotUserSession['data'] = arr

    }

