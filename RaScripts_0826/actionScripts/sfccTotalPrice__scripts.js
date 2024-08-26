
    const sfccTotalPrice = () => {
        if(context?.cartDetails){
var prod=context.sfccGetProductId.response.body.data.products.edges
var cartInfo=context.getCartItems.response.body.data?.cart?.lines?.edges
var cartDetails=context.cartDetails.selectedItems
context.totalPrice=0
for(let i=0;i<cartDetails.length;i++){
    context.totalPrice=context.totalPrice+parseFloat(cartDetails[i].price)*(cartDetails[i].quantity)
        
}
}else{
var bus=context.productDetails
    context.totalPrice=parseFloat(bus.itemPrice*bus.quantity)
}

// context.price = content.SOP_orderTotalMsg+" "+getFormattedCurrency(context.totalPrice)

    }

