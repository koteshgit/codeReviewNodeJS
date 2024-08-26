
    const prepOrdersEnum = () => {
        var data = context.getOrdersDetails?.response?.body?.orders || context.getSpecificOrder?.response?.body.orders || context.rawApi.response?.body?.order || [];
context.orders = convertToEnumObj(data.map((order) => order.id)) //botFunc
context.orders.push({
    name: 'Show More',
    val: 'Show More',
    syn: [ 'Show More' ]
})
context.displayOrdersCount = 0;
koreDebugger.log(JSON.stringify(context.orders))
  
  
  
  
    }

