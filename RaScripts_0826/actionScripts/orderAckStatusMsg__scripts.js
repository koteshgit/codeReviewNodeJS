
    const orderAckStatusMsg = () => {
        var trackingInfo = context.getOrderTrackingInfo.response.body
context.orderStatusAckNodeTxt = context.orderDetails[0].name+", placed on "+context.orderDetails[0].orderDate.split("T")[0]+"is "+trackingInfo[context.orderDetails[0].id].status

    }

