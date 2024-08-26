
    const extractingStoreNameFromEnv = () => {
        var resp = context.getShopifyAdminToken?.response?.body
var bus = context.session?.BotUserSession
var storeName;
for(i=0;i<resp.length;i++){
    storeName = resp[i]?.storeId.split(".")[0]
    if(storeName == env.shopifyStoreName){
        storeName =  resp[i].storeId
        bus.ShopifyAdmin = {
            "storeAdminToken" : resp[i].token,
            "storeUrl" :storeName
        }
    messageLog = "Using store Url "+bus.ShopifyAdmin["storeUrl"]
    }
}
context.genrateStoreFrontToken = JSON.stringify({
    "storefront_access_token": {
        "title": env.shopifyStoreName  //this condition to make a api for creating storefront token if not exist
    }
});

// bus.ShopifyAdmin["storeAdminToken"] = "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";
// bus.ShopifyAdmin["storeUrl"] = "korebot.myshopify.com"
//koreDebugger.log(messageLog)
    }

