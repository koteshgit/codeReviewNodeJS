
    const prepOrderStatus = () => {
        var itemId=context.entities.showTitleMatchItems
for(let i=0;i<context.orders.length;i++){
    // Go through each line item within the current order.
    for(let j=0;j<context.orders[i].line_items.length;j++){
        // Check if the current line item's ID matches the item ID we're looking for.
        if(context.orders[i].line_items[j].id==itemId){
            // If a match is found, store the corresponding order's ID in the context for order status.
            context.orderStatusId=context.orders[i].id
            break;
        }
    }
}
koreDebugger.log("orderId "+context.orderStatusId)
    }

