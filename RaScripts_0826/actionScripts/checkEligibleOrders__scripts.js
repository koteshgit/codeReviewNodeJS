
    const checkEligibleOrders = () => {
        // Assigning the response body of getOrderStatus to orderStatus variable
orderStatus = context.getOrderStatus.response.body
context.displayItems = [];
// Check if there are any keys in the orderStatus object with statuses that indicate a return or cancellation.
if (Object.keys(orderStatus).filter(key => ["Cancelled", "Return Requested", "Return Inprogress", "Return Rejected", "Return Declined", "Returned"].includes(orderStatus[key].status)).length > 0) {
    // If such statuses exist, filter and assign those keys to context.displayItems.
  context.displayItems = Object.keys(orderStatus).filter(key => ["Cancelled", "Return Requested", "Return Inprogress", "Return Rejected", "Return Declined", "Returned"].includes(orderStatus[key].status));
}
koreDebugger.log(Object.keys(orderStatus).filter(key => ["Cancelled", "Return Requested", "Return Inprogress", "Return Rejected", "Return Declined", "Returned"].includes(orderStatus[key].status)))
// Find the specific order from getOrdersDetails or getSpecificOrder using the displayReturnAndCancelOrders entity,and store it in the info variable.
var info=context.getOrdersDetails.response.body.orders.find(order=>order.id==context.entities.displayReturnAndCancelOrders)||context.getSpecificOrder.response.body.order
skus = []
// Go through each line item in the order and push its SKU to the skus array.
for(i=0;i<info.line_items.length;i++){
    skus.push(info.line_items[i].sku)
}
koreDebugger.log(skus)
context.skuQuery=JSON.stringify({
    "skus":skus
})
context.refundItemIds=[]
context.refundItemIds.push(convertToEnumObj(context.displayItems))
context.refundItemIds=context.refundItemIds.flatMap(innerArray => innerArray)

    }

