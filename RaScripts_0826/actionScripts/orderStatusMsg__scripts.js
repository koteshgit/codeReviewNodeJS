
    const orderStatusMsg = () => {
        // var trackingInfo = context.getOrderTrackingInfo.response.body
// context.orderStatusAckNodeTxt = "The order name" +context.ItemName+", placed on "+context.orderDate+"is "+trackingInfo[context.lineItemId].status


var trackingInfo = context.getOrderTrackingInfo.response.body;

// Ensure that the line item ID exists within trackingInfo before accessing its status
if(trackingInfo && context.lineItemId && trackingInfo[context.lineItemId]) {
    context.orderStatusAckNodeTxt = "The order name " + context.ItemName + ", placed on " + context.orderDate + " is " + trackingInfo[context.lineItemId].status;
} else {
    // Handle the case where the status cannot be retrieved
    context.orderStatusAckNodeTxt = "The order name " + context.ItemName + ", placed on " + context.orderDate + " has an unknown status.";
}

    }

