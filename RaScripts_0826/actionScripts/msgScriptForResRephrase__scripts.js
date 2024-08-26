
    const msgScriptForResRephrase = () => {
        var resp = context.getOrdersDetails.response.body.orders[0]
var trackingInfo = context.getOrderTrackingInfo.response.body
if(context.getOrdersDetails.response.body.orders[0].line_items.length==1){
    var productName = resp.line_items[0].name
    var orderDate = resp.created_at.split("T")[0]
   context.cnfNodetext = "I see your order for "+productName+", placed on "+orderDate+". Would you like an update on the status of this particular order"
   context.orderStatusMsgNode = "Your order for "+resp.line_items[0].name+",placed on "+resp.created_at.split("T")[0]+" is  "+trackingInfo[resp.line_items[0].id].status
}

else if(context.getOrdersDetails.response.body.orders[0].line_items.length==2){
    context.cnfNodetext = "I see your order for "+resp.line_items[0].name+" and "+resp.line_items[1].name+", placed on "+resp.created_at.split("T")[0]+". Would you like an update on the status of this particular order?"
    details=""
    for(i=0;i<2 ;i++){
        details += resp.line_items[i].name+",placed on "+resp.created_at.split("T")[0]+" is "+trackingInfo[resp.line_items[i].id].status+" "
    }
    context.orderStatusMsgNode = "Your order has two items "+details
}
else{
    lineItemCnt = context?.orderDetails?.line_items.length || context.getOrdersDetails.response?.body?.orders[0]?.line_items.length
    context.productTitleNameTxt = "Your order includes "+lineItemCnt+" items. Would you like an update on all or a specific one"
}


    }

