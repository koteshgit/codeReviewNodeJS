
    const prepWhatsAppPayload = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName;
const whatsAppConfig = JSON.parse(env.whatsAppConfig);
context.whatsAppBaseUrl = whatsAppConfig.baseUrl;
context.whatsAppAuth = whatsAppConfig.Authorization;
const sender = whatsAppConfig.sender;

if(!context.whatsAppLineItemsLength) {
if (eCommercePlatform == "Shopify") {
    var orderDetails = context.getOrdersDetails.response.body.orders
    var trackingStatus = context.getOrderTrackingInfo.response.body

    if (context.entities.recentOrderItems) {
        for (let i = 0; i < orderDetails.length; i++) {
            itemNum = context.entities.recentOrderItems.split('&')[0]
            orderNum = context.orderId
            if (orderDetails[i].id == orderNum) {
                Item = []
                for (j = 0; j < orderDetails[i].line_items.length; j++) {
                    if (orderDetails[i].line_items[j].id == itemNum) {
                        Item.push(orderDetails[i].line_items[j])
                    }

                }
                orderDetails[i].line_items = Item
                orderDetails = orderDetails[i]
            }
        }
    }
    else { // to show all line items in the bot
        orderDetails = context.orderDetails

    }

    var elements = [];
    var deliveryDateNeeded = ["fulfilled", "Placed", "In Transit"]

    let orderDate = orderDetails.created_at?.split("T")[0];
    let orderId = orderDetails.id;
    let i = context.entities.recentOrderItems ? 1 : orderDetails.line_items.length;
    let billingAddress = orderDetails.billing_address
    let shippingAddress = orderDetails.shipping_address
    let address
    if (billingAddress?.address1)
        address = billingAddress?.address1 + ", " + billingAddress?.city + ", " + billingAddress?.address2 + ", " + billingAddress?.country + " " + billingAddress?.zip

    if (shippingAddress?.address1)
        address = shippingAddress?.address1 + ", " + shippingAddress?.city + ", " + shippingAddress?.address2 + ", " + shippingAddress?.country + " " + shippingAddress?.zip



    for (const orderItem of orderDetails.line_items) {
        let element = {};
        let caption = "";
        i = i - 1;
        element.itemStatus = trackingStatus[orderItem.id]?.status || "";
        let trackingUrl = trackingStatus[orderItem.id]?.trackingUrl;
        element.icon = context.imageSkuMap[orderItem.sku];
        element.title = orderItem.name;
        element.lineItemId = orderItem.id;
        element.orderTotal = getFormattedCurrency(orderDetails.total_price) + " (" + orderDetails.line_items.length + " Items)";
        element.address = address || "No shipping Address";
        element.quantity = orderItem.quantity + " x $" + orderItem.price;

        let deliveryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        if (trackingStatus[orderItem.id]?.status == 'Delivered') {
            element.deliveredDate = trackingStatus[orderItem.id]?.deliveryDate?.split("T")[0] || trackingStatus[orderItem.id]?.updatedAt?.split("T")[0];
        }
        else if (deliveryDateNeeded.includes(trackingStatus[orderItem.id]?.status)) {
            element.estDeliveryDate = deliveryDate;
        }

        caption = `*${element.title}*\n\n*Qty:* ${element.quantity}\n*Order Date* ${orderDate}\n*Order ID* ${orderId}\n*Order Total* ${element.orderTotal} \n*Status*: ${element.itemStatus}\n*Shipping Address* : ${address}`;
        if (trackingUrl) {
            caption = caption + `\n*TrackingUrl*: ${trackingUrl}`;
        }
        if (element.estDeliveryDate) {
            caption = caption + `\n*Est Delivery Date*: ${element.estDeliveryDate}`;
        }
        if (element.deliveredDate) {
            caption = caption + `\n*Delivered Date*: ${element.deliveredDate}`;
        }
        if (i == 0) {
            const orderSummary = `\n\n*Order Summary*\nOrder Price:  ${getFormattedCurrency(orderDetails.total_line_items_price)}\nTax:          ${getFormattedCurrency(orderDetails.total_tax)}\nTotal:        ${getFormattedCurrency(orderDetails.total_price)}\nDiscount:     ${getFormattedCurrency(orderDetails.total_discounts)}\nTotalSummary: ${getFormattedCurrency(orderDetails.total_price)}`;
            caption = caption + orderSummary;

        }

        element.caption = caption.substring(0, 3000);
        var msg = {
            "from": sender,
            "to": context.phoneNumber,
            "content": {
                "mediaUrl": element.icon,
                "caption": element.caption
            }
        }
        elements.push(JSON.stringify(msg));
    }

} else if (eCommercePlatform == "SFCC") {
    // to show all line items in the bot
    orderDetails = context.orderDetails



    var elements = [];
    var deliveryDateNeeded = ["fulfilled", "Placed", "In Transit"]


    let orderDate = orderDetails.created_at?.split("T")[0];
    let orderId = orderDetails.id;
    let i = context.entities.recentOrderItems ? 1 : orderDetails.line_items.length;
    let billingAddress = orderDetails.billing_address
    let defaultAddress = orderDetails.default_address
    if (billingAddress.address1)
        address = billingAddress?.address1 || "" + ", " + billingAddress?.city || "" + ", " + billingAddress?.address2 || "" + ", " + billingAddress?.country || "" + " " + billingAddress?.zip || ""
    else
        address = defaultAddress?.address1 || "" + ", " + defaultAddress?.city || "" + ", " + defaultAddress?.address2 || "" + ", " + defaultAddress?.country || "" + " " + defaultAddress?.zip || ""

    for (const orderItem of orderDetails.line_items) {
        let element = {};
        let caption = "";
        i = i - 1;
        let itemStatus = "Placed"
        element.icon = context.imageSkuMap[orderItem.id].imageUrl;
        element.title = orderItem.name;
        element.lineItemId = orderItem.id;
        element.orderTotal = getFormattedCurrency(orderDetails.total_price) + " (" + orderDetails.line_items.length + " Items)";
        element.address = address || "No shipping Address";
        element.quantity = orderItem.quantity + " x $" + orderItem.price;
        element.deliveryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        caption = `*Product Name*: ${element.title}\n\n*Qty:* ${element.quantity}\n*Order Date* ${orderDate}\n*Order ID* ${orderId}\n*Item ID* ${element.lineItemId}\n*Order Total* ${element.orderTotal} \n*Status*: ${itemStatus}\n*Shipping Address* : ${address}`;
        if (element.deliveryDate) {
            caption = caption + `\n*Est Delivery Date*: ${element.deliveryDate}`;
        }
        if (i == 0) {
            const orderSummary = `\n\n*Order Summary*\nOrder Price:  ${getFormattedCurrency(orderDetails.total_line_items_price)}\nTax:          ${getFormattedCurrency(orderDetails.total_tax)}\nDiscount:     ${getFormattedCurrency(orderDetails.total_discounts)}\nTotal:        ${getFormattedCurrency(orderDetails.total_price)}\nTotalSummary: ${getFormattedCurrency(orderDetails.total_price)}`;
            caption = caption + orderSummary;

        }
        element.caption = caption.substring(0, 3000);
        var msg = {
            "from": sender,
            "to": context.phoneNumber,
            "content": {
                "mediaUrl": element.icon,
                "caption": element.caption
            }
        }
        elements.push(JSON.stringify(msg));
    }
}
context.whatsAppLineItemsInfo = elements;
context.whatsAppLineItemsLength = elements.length;
context.currentLineItemCount = 0;
context.whatsAppLineItemStatus = context.whatsAppLineItemsInfo[context.currentLineItemCount]
} else {
    context.currentLineItemCount = context.currentLineItemCount + 1;
    context.whatsAppLineItemStatus = context.whatsAppLineItemsInfo[context.currentLineItemCount]
}
// koreDebugger.log("COntext", JSON.stringify(bus));
delete context.entities.hIvrOrderId;
delete context.entities.orderId;
delete context.isSpecificOrder;
delete context.GenerativeAINode;
    }

