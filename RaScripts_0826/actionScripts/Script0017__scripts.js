
    const Script0017 = () => {
        var trackingInfo = context.getOrderTrackingInfo.response.body
var val = parseInt(context.entities.multipleLineItems)
context.orderStatusMsg = context.entities.titleName[val-1] +" Placed on "+context.orderDetails[val-1].orderDate+" "+trackingInfo[context.orderDetails[val-1].id].status


    }

