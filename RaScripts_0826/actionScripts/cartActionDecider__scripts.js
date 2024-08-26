
    const cartActionDecider = () => {
        var bus=context.session.BotUserSession
var msg=bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text||bus?.lastMessage?.messagePayload?.message?.renderMsg
var info=context.getProductId.response.body.data?.products?.edges;
var cartInfo=context.getCartItems.response.body.data?.cart?.lines?.edges;
if(msg.match(/\bremove\b/gi)){
    context.cartAction="Remove"
}
try {
    if (JSON.parse(msg)) {
        if(JSON.parse(msg)?.title=="Checkout"){
        context.cartAction = "checkout";
        cartDetails=JSON.parse(msg)
        cartDetails["cartId"]=context.getCartItems.response.body.data.cart.id
        for(i=0;i<cartDetails.selectedItems.length;i++){
            sku=cartInfo.find(item=>item.node.id==cartDetails.selectedItems[i].id).node.attributes[0].value
            obj={
                "id": cartDetails.selectedItems[i].id,
            "quantity": cartDetails.selectedItems[i].quantity,
            "sku":sku,
            "imageUrl":context.imageSkuMap[sku],
            "title":context.titleSkuMap[sku],
            "price":context.priceSkuMap[sku]
            }
           cartDetails.selectedItems[i]=obj 
        }
        koreDebugger.log("cartDetails: "+cartDetails)
        context.cartDetails=cartDetails
        
        }else{
        context.cartAction = "Update";
    }
        
    }
}catch(error){
    if(!context.cartAction){
    context.isValidPaylod= true
    }
} 

koreDebugger.log("Action "+context.cartAction)
    }

