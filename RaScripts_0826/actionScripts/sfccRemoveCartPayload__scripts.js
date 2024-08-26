
    const sfccRemoveCartPayload = () => {
        if(context.cartDetails){
    ids=[]
var cartDetails=context.cartDetails.selectedItems
    for(i=0;i<cartDetails.length;i++){
        ids.push(cartDetails[i]?.id)
    }
    context.removeCartItemsPayload=JSON.stringify({
        "cartId": context.cartDetails.cartId,
        "lineIds": ids
    })
}

var orderDetails = context.sfccCreateAnOrder.response.body.productItems
sku = []
for(i=0;i<orderDetails.length ; i++){
    sku.push(orderDetails[i].productId)
    
}

context.skuQuery =JSON.stringify({
    "skus":sku
})

koreDebugger.log(context.sku)
    }

