orderId=context.orderStatus[0].id
var order=context.getOrdersDetails.response.body.orders
order=order.find(order=>order.id == orderId)
cancelCount=context.orderStatus[0].result.filter(item=>item.status=="Cancelled").length
returnCount=context.orderStatus[0].result.length-cancelCount
txt="You "
if(cancelCount==0){
    txt= txt+"returned "+returnCount+" in this order including "+order.line_items[0].name+" Would you like an update on all, or a specific item?"
}
if(returnCount==0){
    txt=txt+"canceled "+cancelCount+" in this order including "+order.line_items[0].name+" Would you like an update on all, or a specific item?"
}
 txt=txt+"returned or canceled "+context.orderStatus[0].result.length+" in this order including "+order.line_items[0].name+" Would you like an update on all, or a specific item?"

print(txt)

// Cancelled
// "Return Rejected",
//     "OPEN": "Return Inprogress",
//     "REQUESTED": "Return Requested",
//     "CLOSED": "Returned",
//     "DECLINED": "Return Declined"
//     Return Rejected
