
    const sfccEmailPayload = () => {
        var BUS=context.session.BotUserSession
var firstName=BUS.UserInfo.first_name
var lastName=BUS.UserInfo.last_name
var orderDate=getFormattedDate(new Date())
var address1=context.shippingAddress?.address1||""
// var address2=context.shippingAddress?.address2||""
var city=context.shippingAddress?.city||""
var country=context.shippingAddress?.country||""
var zip=context.shippingAddress?.zip||""
billingAddress=address1+", "+city+", "+country+", "+zip+"."
var shippingAddress=billingAddress
var orderNumber=context.sfccCreateAnOrder.response.body?.orderNo||""
var itemsHTML=""   
var items=context.sfccCreateAnOrder.response.body.productItems
var itemImageUrl="https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png"
var totalItemPrice = getFormattedCurrency(context.sfccCreateAnOrder.response.body?.productSubTotal)
let totalPrice=getFormattedCurrency(context.sfccCreateAnOrder.response.body?.productTotal);
let tablesHTML = [];
let tax = getFormattedCurrency(context.sfccCreateAnOrder.response.body?.productItems[0].current_total_tax);
for (let index = 0; index < items.length; index++) {
    const item = items[index];
    let price = getFormattedCurrency(item.price);
    let imageUrl = context.productDetails.itemImgUrl;
    const table = `
        <table key=${index}>
            <tr>
                <td><img src=${imageUrl} width="80px" height="80px" alt="image"></td>
                <td>
                    <p>Title:<strong>${item.productName}</strong></p>
                    <p>Quantity: <strong>${item.quantity}</strong></p>
                    <p>Price: <strong>${price}</strong></p>
                </td>
            </tr>
        </table>
    `;
    
    tablesHTML.push(table);
}
let storeName = env.displayStoreName;
let content = "<?xml version='1.0' encoding='utf-8'?><head><style>.email-body {color: black;}.header {margin: 15px 0px 0 0;}.flex-container {display: flex;align-items: center;}.flex-container img {margin-right: 10px;}</style></head><body><div class=\"email-body\" style=\"font-family: Arial, sans-serif;\"><div class=\"header\" style=\"color: black;\"><p>Dear "+firstName+" "+lastName+",</p><p>We are excited to confirm your recent order with "+storeName+". Thank you for choosing us for your service needs. Below, you'll find all the details of your order.</p><p class=\"order-info-header\" style=\"font-weight: bold;\">Order Information:</p></div><div class=\"header\"><ul style=\"margin: 0; padding: 0;\"><li>Order Number: "+orderNumber+"</li><li>Order Date: <b>"+orderDate+"</b></li><li>Billing Address: "+billingAddress+"</li><li>Shipping Address: "+shippingAddress+"</li></ul></div><div class=\"header\" style=\"font-weight: bold;\">Order Items:</div><div>"
+tablesHTML+"</div><div class=\"header\"><b>Order Summary</b><p><ul><li>Items Total Price :<b>"+totalItemPrice+"</b></li><li>Order Total:<b>"+totalPrice+"</b></li></ul></p><p><b>Order Status:</b> <b style='color:green'>Placed</b></p><p>Please keep this email for your records. If you have any questions or concerns about your order, please don't hesitate to contact our customer support team. Please reference your order number for faster assistance.</p><p>Thank you for choosing "+storeName+". We appreciate your business and look forward to serving you again in the future.</p><p>Sincerely,<br><b>"+storeName+"</b></p></div></div></body>";

context.emailBody=JSON.stringify({
    content,
    "to": BUS.UserInfo.email,
    "subject": "Order Confirmation -"+orderNumber
})
delete BUS.ProductDetails;
    }

