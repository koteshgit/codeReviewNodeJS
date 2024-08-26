
    const prepEnum = () => {
        var orderDetails = context.getOrdersDetails?.response?.body?.orders
for(i=0;i<orderDetails.length ; i++){
    if(orderDetails[i].id == context.orderId){
        context.productTitle = convertToEnumObj(orderDetails[i].line_items.map(item => item.name));
       
   }
}
context.productTitle.push({
    "name":"all",
    "val":"all",
    "syn":"all"
})



    }

