
    const totalOrderPrice = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName

// var sku = context.entities.searchResults.indexOf(" ") != -1 ? context.entities.searchResults.split(" ")[0] : context.entities.searchResults.split("#")[0];

if(eCommercePlatform == "Shopify") {
// If cart details exist in the context, calculate the total price of items in the cart.    
if(context?.cartDetails){   
var prod=context.getProductId.response.body.data.products.edges
var cartInfo=context.getCartItems.response.body.data?.cart?.lines?.edges
var cartDetails=context.cartDetails.selectedItems
context.totalPrice=0
for(let i=0;i<cartDetails.length;i++){
    // Calculate the total price by adding the product's price multiplied by its quantity.    
    context.totalPrice=context.totalPrice+parseFloat(cartDetails[i].price)*(cartDetails[i].quantity)
        
}
}else{
    var sku = context.entities.searchResults.indexOf(" ") != -1 ? context.entities.searchResults.split(" ")[0] : context.entities.searchResults.split("#")[0];
    koreDebugger.log("Total Price Product Details" + context.productDetails)
    var bus=context.productDetails
    // Calculate the total price using the product's itemPrice and quantity.
    context.totalPrice=parseFloat(bus.itemPrice*bus.quantity)
}
} else if(eCommercePlatform == "SFCC") {
    var bus=context.productDetails;
    koreDebugger.log("Total Price Product Details" + context.productDetails)
    var bus=context.productDetails

    context.totalPrice=parseFloat(bus?.itemPrice*bus?.quantity)
}

// context.price = content.SOP_orderTotalMsg+" "+getFormattedCurrency(context.totalPrice)

    }

