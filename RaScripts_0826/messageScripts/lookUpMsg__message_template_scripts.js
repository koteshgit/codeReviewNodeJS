orderId=context.orderStatus[0].id
var order=context.getOrdersDetails.response.body.orders
order=order.find(order=>order.id == orderId)
name=[]
for(i=0;i<context.orderStatus[0].result.length;i++){
    name.push(order.line_items.find(item => item.id==context.orderStatus[0].result[i].id).name)
}
txt="I see you return/cancelation request for "+name[0]+" and "+name[1]+". Would you like an update on the status of this particular order?"
print(txt)
