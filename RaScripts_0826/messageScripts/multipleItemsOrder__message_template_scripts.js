orderId=context.entities.ivrOrderId||context.entities.hIvrOrderId
var order=context.orderStatus.find(order=>order.id % 10000==orderId)
cancelCount=order.result.filter(item=>item.status=="Cancelled").length
returnCount=order.result.length-cancelCount
txt="You "
orderName=""
for(i=0;i<order.result.length;i++){
    orderName=orderName+(i+1)+" "+order.result[i].name+" \n"
}
prefix="returned or canceled "+context.orderStatus[0].result.length
if(cancelCount==0){
    prefix= "returned "+returnCount
}
if(returnCount==0){
    prefix=txt+"canceled "+cancelCount
}
 txt=txt+prefix+" in this order including "+orderName+" Would you like an update on all, or a specific item?"

print(txt)
