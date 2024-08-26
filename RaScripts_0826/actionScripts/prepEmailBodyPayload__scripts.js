
    const prepEmailBodyPayload = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName;

//if(eCommercePlatform == "Shopify") {
koreDebugger.log("Parent Intent is " + context.parentIntent)
if(context.parentIntent === "Search and Order a Product") {
    var BUS=context.session.BotUserSession
    var firstName=BUS.UserInfo.first_name
    var lastName=BUS.UserInfo.last_name
    var orderDate=getFormattedDate(new Date())
    //retrieve shipping address details, defaulting to an empty string if not available.
    var address1=context.shippingAddress?.address1||""
    // var address2=context.shippingAddress?.address2||""
    var city=context.shippingAddress?.city||""
    var country=context.shippingAddress?.country||""
    var zip=context.shippingAddress?.zip||""
    // Construct the billing address by concatenating address components.
    billingAddress=address1+", "+city+", "+country+", "+zip+"."
    var shippingAddress=billingAddress
    var orderNumber=context.createAnOrder.response.body?.order?.id||""
    var itemsHTML=""   
    var items=context.createAnOrder.response.body.order.line_items
    // Set a default image URL for items.
    var itemImageUrl="https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png"
    var totalItemPrice = getFormattedCurrency(context.createAnOrder.response.body?.order?.total_line_items_price)
    let totalPrice=getFormattedCurrency(context.createAnOrder.response.body?.order?.current_total_price);
    let tablesHTML = [];
    let tax = getFormattedCurrency(context.createAnOrder.response.body?.order?.current_total_tax);
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        let price = getFormattedCurrency(item.price);
        // Retrieve the image URL for the item, defaulting to a placeholder if not available.
        let imageUrl = context.imageSkuMap[item.sku]?.imageUrl || context.imageSkuMap[item.sku] || itemImageUrl;
        // Construct the HTML table for the current item.
        const table = `
            <table key=${index}>
                <tr>
                    <td><img src=${imageUrl} width="80px" height="80px" alt="image"></td>
                    <td>
                        <p>Title:<strong>${item.title}</strong></p>
                        <p>Quantity: <strong>${item.quantity}</strong></p>
                        <p>Price: <strong>${price}</strong></p>
                    </td>
                </tr>
            </table>
        `;
        
        tablesHTML.push(table);
    }
    let storeName = env.displayStoreName;
    // Construct the email body content with personalized greeting, order information, and summary.
    let content = "<?xml version='1.0' encoding='utf-8'?><head><style>.email-body {color: black;}.header {margin: 15px 0px 0 0;}.flex-container {display: flex;align-items: center;}.flex-container img {margin-right: 10px;}</style></head><body><div class=\"email-body\" style=\"font-family: Arial, sans-serif;\"><div class=\"header\" style=\"color: black;\"><p>Dear "+firstName+" "+lastName+",</p><p>We are excited to confirm your recent order with "+storeName+". Thank you for choosing us for your service needs. Below, you'll find all the details of your order.</p><p class=\"order-info-header\" style=\"font-weight: bold;\">Order Information:</p></div><div class=\"header\"><ul style=\"margin: 0; padding: 0;\"><li>Order Number: "+orderNumber+"</li><li>Order Date: <b>"+orderDate+"</b></li><li>Billing Address: "+billingAddress+"</li><li>Shipping Address: "+shippingAddress+"</li></ul></div><div class=\"header\" style=\"font-weight: bold;\">Order Items:</div><div>"
    +tablesHTML+"</div><div class=\"header\"><b>Order Summary</b><p><ul><li>Items Total Price :<b>"+totalItemPrice+"</b></li><li>Tax : <b>"+tax+"</b></li><li>Order Total:<b>"+totalPrice+"</b></li></ul></p><p><b>Order Status:</b> <b style='color:green'>Placed</b></p><p>Please keep this email for your records. If you have any questions or concerns about your order, please don't hesitate to contact our customer support team. Please reference your order number for faster assistance.</p><p>Thank you for choosing "+storeName+". We appreciate your business and look forward to serving you again in the future.</p><p>Sincerely,<br><b>"+storeName+"</b></p></div></div></body>";
    
    // Assign the email content to the context along with recipient and subject details.
    context.emailBody=JSON.stringify({
        "content":content,
        "to": BUS.UserInfo.email,
        "subject": "Order Confirmation -"+orderNumber
    })
    delete BUS.ProductDetails;
} 

if(context.parentIntent === "Cancel Order") {
    var bus = context.session.BotUserSession?.UserInfo
    var order = context.eligibleOrders
    // var bus=context.session.BotUserSession
    var items = []
    if(context.entities.displayLineItems){
        for (i = 0; i < context.eligibleLineItems.length; i++){
            // If the current eligible item's ID is included in the displayLineItems, add it to the 'items' array
            if(context.entities.displayLineItems.includes(context.eligibleLineItems[i].id)){
                 items.push(context.eligibleLineItems[i])
            }
        }
    }
    // If all items are marked as cancelled (isAllCancelled flag is true), assign all eligible line items to 'items'
    else if(context.isAllCancelled){
        items = context.eligibleLineItems
    }
    else{
        items = context.eligibleLineItems
    }
    var tablesHTML = [];
    var refundAmout = 0
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        let price = getFormattedCurrency(item.price)
            // Construct an HTML table for the current item with image, name, quantity, and price
        const table = `
            <table key=${index}>
                <tr>
                    <td><img src=${item.imageUrl} width="80px" height="80px" alt="image"></td>
                    <td>
                        <p>Name:<strong>${item.name}</strong></p>
                        <p>Quantity: <strong>${item.fulfillable_quantity}</strong></p>
                        <p>Price: <strong>${price}</strong></p>
                    </td>
                </tr>
            </table>
        `;
        
        tablesHTML.push(table);
        refundAmout += parseFloat(item.price)
    }
    refundAmout = getFormattedCurrency(refundAmout)
    // Prepare the email body content as a JSON string and store it in the context under 'emailBody'
    context.emailBody = JSON.stringify({
        "content":"<?xml version='1.0' encoding='utf-8'><head><meta charset=\"UTF-8\"></head><body><p>Dear "+bus?.first_name+",</p><p>We hope this message finds you well. We want to inform you that your recent order with <strong>Kore</strong> has been successfully canceled. Below, you will find details regarding the canceled order:</p><h3>Order Details:</h3><ul><li>Order Number: <strong>"+context.entities.showOrders+"</strong></li><li>Order Date: <strong>"+order.created_at.split('T')[0]+"</strong></li><li>Canceled Date: <strong>"+presentDate()+"</strong></li><li>Total Amount: <strong>"+getFormattedCurrency(order.current_subtotal_price)+"</strong></li></ul><h4>Cancelled Items:</h4>"+tablesHTML+"<h4>Refund Information:</h4><ul><li>Refund Amount: <strong>"+refundAmout+"</strong></li><li>Refund Method: <strong>Internet Banking</strong></li><li>Expected Refund Date: <strong>"+presentDate()+"</strong></li></ul><p>Your refund, if applicable, will be processed in accordance with our refund policy. Please allow a few business days for the refund to appear in your account.</p><p>If you have any questions or concerns regarding the cancellation or refund process, please do not hesitate to contact our customer support team at <a href='mail'>demo@kore.com</a> or <strong>99999999999</strong>. We are here to assist you with any inquiries you may have.</p><p>We appreciate your business and hope to have the opportunity to serve you again in the future. Thank you for choosing <strong>"+env.displayStoreName+"</strong>.</p><p>Best Regards,<br>"+env.displayStoreName+"<br>demo@kore.com</p></body></html>",
        "to": bus?.email,
        "subject": "Order Cancellation Confirmation"
    })
}

if(context.parentIntent === "IVR Cancel Order") {
    var bus = context.session.BotUserSession?.UserInfo
    var order = context.getCancelableItems.response.body.eligibleOrders
    // var bus=context.session.BotUserSession
    var items = []
    if(context.orderIdToCancel){
        order=order.find(order=>order.id==parseInt(context.orderIdToCancel))
        eligibleLineItems=order.line_items
        for(i=0;i<eligibleLineItems.length ; i++){
                 items.push(eligibleLineItems[i])
        }
        
    }
    else
    { 
    if(context.line_itemIdToCancel){
        order=order.find(order=>order.line_items.find(item=>item.id==parseInt(context.line_itemIdToCancel)))
        eligibleLineItems=order.line_items.find(item=>item.id==parseInt(context.line_itemIdToCancel))
        items.push(eligibleLineItems)
    }
    }
    var tablesHTML = [];
    var refundAmout = 0
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        let price= getFormattedCurrency(item.price)
        const table = `
            <table key=${index}>
                <tr>
                    <td><img src=${item.imageUrl} width="80px" height="80px" alt="image"></td>
                    <td>
                        <p>Name:<strong>${item.name}</strong></p>
                        <p>Quantity: <strong>${item.fulfillable_quantity}</strong></p>
                        <p>Price: <strong>${price}</strong></p>
                    </td>
                </tr>
            </table>
        `;
        
        tablesHTML.push(table);
        refundAmout += parseFloat(item.price)
    }
    refundAmout = getFormattedCurrency(refundAmout)
    context.emailBody = JSON.stringify({
        "content":"<?xml version='1.0' encoding='utf-8'><head><meta charset=\"UTF-8\"></head><body><p>Dear "+bus?.first_name+",</p><p>We hope this message finds you well. We want to inform you that your recent order with <strong>Kore</strong> has been successfully canceled. Below, you will find details regarding the canceled order:</p><h3>Order Details:</h3><ul><li>Order Number: <strong>"+context.entities.showOrders+"</strong></li><li>Order Date: <strong>"+order.created_at.split('T')[0]+"</strong></li><li>Canceled Date: <strong>"+presentDate()+"</strong></li><li>Total Amount: <strong>"+getFormattedCurrency(order.current_subtotal_price)+"</strong></li></ul><h4>Cancelled Items:</h4>"+tablesHTML+"<h4>Refund Information:</h4><ul><li>Refund Amount: <strong>"+refundAmout+"</strong></li><li>Refund Method: <strong>Internet Banking</strong></li><li>Expected Refund Date: <strong>"+presentDate()+"</strong></li></ul><p>Your refund, if applicable, will be processed in accordance with our refund policy. Please allow a few business days for the refund to appear in your account.</p><p>If you have any questions or concerns regarding the cancellation or refund process, please do not hesitate to contact our customer support team at <a href='mail'>demo@kore.com</a> or <strong>99999999999</strong>. We are here to assist you with any inquiries you may have.</p><p>We appreciate your business and hope to have the opportunity to serve you again in the future. Thank you for choosing <strong>"+env.displayStoreName+"</strong>.</p><p>Best Regards,<br>"+env.displayStoreName+"<br>demo@kore.com</p></body></html>",
        "to": bus?.email,
        "subject": "Order Cancellation Confirmation"
    })    
    
}
    }

