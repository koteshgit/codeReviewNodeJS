
    const prepQueryForProductId = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
var sku = context.entities.searchResults.indexOf(" ") != -1 ? context.entities.searchResults.split(" ")[0] : context.entities.searchResults.split("#")[0];

if(eCommercePlatform == "Shopify") {
    context.skuQuery = JSON.stringify({
        "skus": [sku]
    })
} else if(eCommercePlatform == "SFCC") {
    
    context.skuQuery = JSON.stringify({
        "getProductsUrl": "https://"+env.shortCode+".api.commercecloud.salesforce.com/product/shopper-products/v1/organizations/"+env.organizationId+"/products?siteId="+env.siteId+"&ids="+sku,
        auth:"Bearer "+context.session.BotUserSession.SfccAccessToken.accessToken
    })
}
koreDebugger.log("payload"+context.skuQuery);
    }

