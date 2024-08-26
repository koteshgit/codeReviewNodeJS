
    const parseOrderDetails = () => {
        // Parse the commercePlatformConfig JSON string from the environment variable and extract the platform name.
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName

// Check if the extracted platform name is Shopify.
if(eCommercePlatform == "Shopify") {
    var ordersData = context.getOrdersDetails?.response?.body?.orders;  // Retrieve all orders for a particular logged-in customer.
    context.isSpecificOrder = false
    var sku = []
    var specificOrder = context.getSpecificOrder?.response?.body
    
    // If a specific order exists and the contact email matches the user's email, set the context accordingly.
    if(specificOrder?.order?.id && specificOrder?.order?.contact_email == context.session.BotUserSession?.UserInfo?.email){  
        // Map the specific order to the user's account based on the order ID provided by the API.
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
    // Construct a JSON payload with the collected SKUs for extracting images.
    context.skuQuery = JSON.stringify({     
        "skus":sku
    })
    
    koreDebugger.log(sku)
    
    context.showMoreClickCount =0
} else if(eCommercePlatform == "SFCC") {     // Check if the platform is Salesforce Commerce Cloud (SFCC).   
    var ordersData = context.getOrdersDetails?.response?.body?.orders;
    context.isSpecificOrder = false
    var sku = []
    var specificOrder = context.getSpecificOrder?.response?.body;
    if(specificOrder?.id){
        var ordersData = [specificOrder]
        context.orderId = specificOrder?.id 
        context.isSpecificOrder = true
        context.orderDetails = specificOrder
    }
    for(i=0;i<ordersData.length ; i++){
        for(j=0 ; j<ordersData[i].line_items.length ; j++){
            if(!sku.includes(ordersData[i].line_items[j].id)){
            sku.push(ordersData[i].line_items[j].id)
            }
        }
    }
    koreDebugger.log(sku)
    // Construct the SFCC request URL using the collected SKUs and environment variables.
    context.skuQuery = JSON.stringify({
        "getProductsUrl": "https://"+env.shortCode+".api.commercecloud.salesforce.com/product/shopper-products/v1/organizations/"+env.organizationId+"/products?siteId="+env.siteId+"&ids="+sku.join(','),
        auth:"Bearer "+context.session.BotUserSession.SfccAccessToken.accessToken
    })
    
    context.showMoreClickCount =0
}
    }

