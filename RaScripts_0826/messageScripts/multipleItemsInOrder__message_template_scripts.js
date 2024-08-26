orderId=context.entities.ivrOrderId||context.entities.hIvrOrderId
var order=context.orderStatus.find(order=>order.id==orderId)
cancelCount=order.result.filter(item=>item.status=="Cancelled").length
returnCount=order.result.length-cancelCount
txt="You "

if(cancelCount==0){
    txt= txt+"returned "+returnCount+" in this order including "+order.result[0].name+" Would you like an update on all, or a specific item?"
}
if(returnCount==0){
    txt=txt+"canceled "+cancelCount+" in this order including "+order.result[0].name+" Would you like an update on all, or a specific item?"
}
 txt=txt+"returned or canceled "+context.orderStatus[0].result.length+" in this order including "+order.result[0].name+" Would you like an update on all, or a specific item?"

print(txt)
