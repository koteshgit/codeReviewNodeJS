
    const prepBuyNow = () => {
        // Parse the commerce platform configuration from environment variables and retrieve the platform name
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName

if (eCommercePlatform == "Shopify") {
    // Extract product details from the Shopify response using optional chaining
    var productId = context.getProductId.response.body.data?.products?.edges[0]?.node?.variants?.edges[0]?.node?.id;
    var product=context.getProductId.response.body.data?.products?.edges[0].node
    var imageUrl=context.getProductId.response.body.data?.products?.edges[0]?.node?.images?.edges[0]?.node?.src;
    var arrProductId = productId.split("/")
    sku = context.entities.searchResults.indexOf(" ") !== -1 ? context.entities.searchResults.split(" ")[0] : context.entities.searchResults.split("#")[0]
    var bus = context.session.BotUserSession
    // Extract the last message payload, checking various possible paths for the message content.
    var msg=bus?.lastMessage?.messagePayload?.message?.payload ||bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text|| bus.lastMessage?.messagePayload?.entry[0]?.messaging[0]?.postback?.payload
    koreDebugger.log("payload: " + msg)
    // If the message contains "buy now" (case insensitive), construct the product details object.
    if(msg.match(/\bbuy now\b/gi)){
        context.productDetails ={
            "ItemId"     : arrProductId[4],
            "itemTitle"  : product.title,
            "itemImgUrl" : imageUrl,
            "itemPrice"  : product.variants.edges[0].node.price,
            "itemCatogery": product?.categories,
            "sku": context.entities.searchResults?.split("#")[0],
            "quantity":parseInt(context.entities.searchResults.split("#")[1])
        }
    }
} else if (eCommercePlatform == "SFCC") {
    // Get the product details directly from the response body.
    var product=context.getProductId.response.body
    // Extract the product ID and corresponding data using object keys and values.    
    var productId = Object.keys(product)[0];
    var productIdData = Object.values(product)[0];
    // Determine SKU based on the presence of a space or hash in the search results
    sku = context.entities.searchResults.indexOf(" ") !== -1 ? context.entities.searchResults.split(" ")[0] : context.entities.searchResults.split("#")[0]
    var bus = context.session.BotUserSession
    var msg=bus?.lastMessage?.messagePayload?.message?.payload ||bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text|| bus.lastMessage?.messagePayload?.entry[0]?.messaging[0]?.postback?.payload
    koreDebugger.log("payload: "+msg)
    if(msg.match(/\bbuy now\b/gi)){
        context.productDetails ={
            "ItemId"     : productId,
            "itemTitle"  : productIdData.productName,
            "itemImgUrl" : productIdData.imageUrl,
            "itemPrice"  : productIdData.price,
            "itemCatogery": productIdData.categories,
            "sku": productId,
            "quantity":parseInt(context.entities.searchResults.split("#")[1])
        }
    }
    koreDebugger.log(JSON.stringify(msg))
}
koreDebugger.log("Product Details is " + JSON.stringify(context.productDetails))

    }

