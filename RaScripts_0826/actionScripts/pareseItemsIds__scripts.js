
    const pareseItemsIds = () => {
        orders=context.getCancelableItems.response.body.eligibleOrders
context.lineItemId=[]
k=1
number=[]
for(i=0;i<orders.length;i++){
    for(j=0;j<orders[i].line_items.length;j++){
    if(context.entities.productNameToCancel.includes(orders[i].line_items[j].name)){
        context.lineItemId.push(orders[i].line_items[j].id)
        number.push(k.toString())
        k++
    }
}
}
if(context.lineItemId.length==0){
    delete context.entities.productNameToCancel
    
}
if(context.lineItemId.length==1){
    context.line_itemIdToCancel=context.lineItemId[0]
    
}
context.number=convertToEnumObj(number)
    }

