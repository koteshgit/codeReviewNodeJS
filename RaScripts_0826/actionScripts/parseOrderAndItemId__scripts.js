
    const parseOrderAndItemId = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName

context.imageSkuMap = {}
if (eCommercePlatform == "Shopify") {
var ordersData = context.getOrdersDetails?.response?.body?.orders;
var sku = []
itemId=context.entities.itemId.split("&")[0]
orderId=context.entities.itemId.split("&")[1]
if(ordersData.find(order => order.id==orderId)){
    order=ordersData.find(order => order.id==orderId)
    if(order.line_items.find(item=>item.id==itemId)){
        context.isValidItemId=true
    }
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
context.orderId = context.entities.itemId.split("&")[1]
context.showMoreClickCount =0
} else if (eCommercePlatform == "SFCC") {
    var ordersData = context.getOrdersDetails?.response?.body?.orders;
var sku = []
itemId=context.entities.itemId.split("&")[0]
orderId=context.entities.itemId.split("&")[1]
if(ordersData.find(order => order.id==orderId)){
    order=ordersData.find(order => order.id==orderId)
    if(order.line_items.find(item=>item.id==itemId)){
        context.isValidItemId=true
    }
}
for(i=0;i<ordersData.length ; i++){
    for(j=0 ; j<ordersData[i].line_items.length ; j++){
        if(!sku.includes(ordersData[i].line_items[j].id)){
        sku.push(ordersData[i].line_items[j].id)
        }
    }
    
}
context.skuQuery = JSON.stringify({
    "getProductsUrl": "https://"+env.shortCode+".api.commercecloud.salesforce.com/product/shopper-products/v1/organizations/"+env.organizationId+"/products?siteId="+env.siteId+"&ids="+sku.join(','),
    auth:"Bearer "+context.session.BotUserSession.SfccAccessToken.accessToken
})

context.orderId = context.entities.itemId.split("&")[1]
context.showMoreClickCount =0
}
    }

