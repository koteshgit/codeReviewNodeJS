
    const sfccParseOrderDetails = () => {
        var ordersData = context.sfccGetOrdersDetails?.response?.body?.orders;
context.isSpecificOrder = false
var sku = []
var specificOrder = context.sfccGetSpecificOrder?.response?.body
if(specificOrder?.order?.id && specificOrder?.order?.contact_email == context.session.BotUserSession?.UserInfo?.email){
    var ordersData = [specificOrder?.order]
    context.orderId = specificOrder?.order?.id 
    context.isSpecificOrder = true
    context.orderDetails = specificOrder?.order
}
for(i=0;i<ordersData.length ; i++){
    for(j=0 ; j<ordersData[i].line_items.length ; j++){
        if(!sku.includes(ordersData[i].line_items[j].sku)){
        sku.push(ordersData[i].line_items[j].sku)
        }
    }
    
}


context.skuQuery = JSON.stringify({
    "skus":sku
})


koreDebugger.log(sku)

context.showMoreClickCount =0
    }

