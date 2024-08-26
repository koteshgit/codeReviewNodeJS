
    const sfccCstrtBuyNow = () => {
        var product=context.sfccGetProductId.response.body
var productId = product.hits[0].productId;
var imageUrl=product.hits[0].image.link;
sku = context.entities.sfccSearchResults.indexOf(" ") !== -1 ? context.entities.sfccSearchResults.split(" ")[0] : context.entities.sfccSearchResults.split("#")[0]
var bus = context.session.BotUserSession
var msg=bus?.lastMessage?.messagePayload?.message?.payload ||bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text|| bus.lastMessage?.messagePayload?.entry[0]?.messaging[0]?.postback?.payload
koreDebugger.log("payload: "+msg)
if(msg.match(/\bbuy now\b/gi)){
context.productDetails ={
    "ItemId"     : productId,
    "itemTitle"  : product.hits[0].productName,
    "itemImgUrl" : imageUrl,
    "itemPrice"  : product.hits[0].price,
    "itemCatogery": product?.categories,
    "sku": productId,
    "quantity":parseInt(context.entities.sfccSearchResults.split("#")[1])
}
}
koreDebugger.log(JSON.stringify(msg))




    }

