
    const chckMultipleLineItems = () => {
        // Retrieve the selected order ID from the context entities
var orderSelected = context.entities.showOrders
itemId = []
for (i = 0; i < context?.eligibleOrders.length; i++){
    // Check if the current order's ID matches the selected order ID
    if(context.eligibleOrders[i].id == orderSelected){
        context.eligibleLineItems = context.eligibleOrders[i].line_items
        context.eligibleOrders = context.eligibleOrders[i]
    } 
}

var skus = []
// Loop through each eligible line item in the context
for(let i=0;i<context?.eligibleLineItems.length;i++){
    itemId.push(context.eligibleLineItems[i]?.id)
    skus.push(context.eligibleLineItems[i]?.sku)
}
// Convert the array of item IDs to an enumeration object and store it in the context
context.itemsId = convertToEnumObj(itemId)
context.skuQuery = JSON.stringify({
    "skus": skus
})
    }

