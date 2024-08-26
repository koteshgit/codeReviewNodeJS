
    const prepCalculatedOrderId = () => {
        order=context.getCancelableItems.response.body.eligibleOrders
orderId=context?.orderIdToCancel||order.find(order=>order.line_items.find(item=>item.id==parseInt(context?.line_itemIdToCancel))).id.toString()
context.caluculatedOrder  =JSON.stringify({
    "orderId" : orderId
})
koreDebugger.log(context?.caluculatedOrder)
    }

