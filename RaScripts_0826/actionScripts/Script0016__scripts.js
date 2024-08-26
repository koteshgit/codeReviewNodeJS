
    const Script0016 = () => {
        var trackingStatus = context.getOrderTrackingInfo.response.body
if(!context.orderDetails){
    context.orderDetails = context.getOrdersDetails.response.body.orders[0]  // specifically when it has only one order Id
}
if(context.entities.productTitleName == "all"){
    context.orderStatusMsg = "Your order has "+context.orderDetails.line_items.length+" items "
    for(i=0;i<context.orderDetails.line_items.length ; i++){
        context.orderStatusMsg+=context.orderDetails.line_items[i].name+" Placed on "+context.orderDetails.created_at.split("T")[0]+" "+trackingStatus[context.orderDetails.line_items[i].id].status+"\n"
    }
}
else{
    context.orderStatusMsg = " "
    for(i=0;i<context.orderDetails.line_items.length ; i++){
        if(context.orderDetails.line_items[i].name == context.entities.productTitleName){
            context.orderStatusMsg+=context.orderDetails.line_items[i].name+" Placed on "+context.orderDetails.created_at.split("T")[0]+" "+trackingStatus[context.orderDetails.line_items[i].id].status+"\n"
        }
    }
}


    }

