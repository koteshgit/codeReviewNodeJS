
    const removeCartPayload = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
// Determine the SKU by checking if search results contain a space or not and splitting accordingly.
// var sku = context.entities.searchResults.indexOf(" ") != -1 ? context.entities.searchResults.split(" ")[0] : context.entities.searchResults.split("#")[0];

if(context.cartDetails){
    ids=[]
    // Retrieve selected items from cart details.    
var cartDetails=context.cartDetails.selectedItems
    // Loop through each cart detail item to extract the IDs.
    for(i=0;i<cartDetails.length;i++){
        ids.push(cartDetails[i]?.id)
    }
    // Prepare the payload for removing cart items by stringifying the cartId and lineIds.
    context.removeCartItemsPayload=JSON.stringify({
        "cartId": context.cartDetails.cartId,
        "lineIds": ids
    })
}

// Retrieve order details from the createAnOrder response.
var orderDetails = context.createAnOrder.response.body.order
var sku = []
for(i=0;i<orderDetails.line_items.length ; i++){
    sku.push(orderDetails.line_items[i].sku)
    
}
if(eCommercePlatform == "Shopify") {
// Prepare the SKU query payload for Shopify by stringifying the SKUs array.    
context.skuQuery =JSON.stringify({
    "skus":sku
})

koreDebugger.log(context.sku)
} else if(eCommercePlatform == "SFCC") {
    // Prepare the SKU query payload for SFCC by constructing the products URL with necessary parameters and token.
    context.skuQuery = JSON.stringify({
        "getProductsUrl": "https://"+env.shortCode+".api.commercecloud.salesforce.com/product/shopper-products/v1/organizations/"+env.organizationId+"/products?siteId="+env.siteId+"&ids="+sku.join(','),
        auth:"Bearer "+context.session.BotUserSession.SfccAccessToken.accessToken
    })
}
    }

