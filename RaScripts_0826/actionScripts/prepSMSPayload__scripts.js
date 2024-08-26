
    const prepSMSPayload = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
// Determine SKU by checking if a space exists in the search results, and split accordingly.

if(eCommercePlatform == "Shopify") {
    if(context.parentIntent === "Search and Order a Product") {
        var bus=context.session.BotUserSession;
        //Retrieve the order number from the createAnOrder response body.
        var orderNumber=context.createAnOrder.response.body?.order?.id;
        // Map line items to their titles and join them into a string.
        let lineItems = context.orderPayload.order.line_items.map(item=>item.title);
        lineItems = lineItems.join(", ");
        // Construct payload with phone number and confirmation message.
        payload = {
              "phone": bus.UserInfo.phone,
              "message":  `${env.displayStoreName} Order Confirmation : ${orderNumber}\n\nHello ${bus.UserInfo.first_name} ${bus.UserInfo.last_name},\nThank you for choosing ${env.displayStoreName}! Your order for ${lineItems} has been successfully placed and is now being processed.`
            };
        context.smsBody = JSON.stringify(payload);
        koreDebugger.log(context.smsBody)
    }
    if(context.parentIntent === "Cancel Order" || context.parentIntent === "IVR Cancel Order") {
        var bus = context.session.BotUserSession?.UserInfo
        payload = {
          "phone": bus?.phone,
          "message":  `Your Order has been cancelled`
        };
        context.smsBody = JSON.stringify(payload);
    }
    
} else if(eCommercePlatform == "SFCC") {
    context.smsNotNeeded = true;  
}
    }

