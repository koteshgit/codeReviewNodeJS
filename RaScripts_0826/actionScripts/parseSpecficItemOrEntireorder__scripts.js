
    const parseSpecficItemOrEntireorder = () => {
        if(context.entities.chooseOrderToCancel=="Specific Item"){
for(i=0;i<context.multiItemOrder.line_items.length;i++){
    if(context.multiItemOrder.line_items[i].name==context.entities.specificOrder){
        context.line_itemIdToCancel=context.multiItemOrder.line_items[i].id
    }
}
}else{
    context.orderIdToCancel=context.multiItemOrder.id
}
    }

