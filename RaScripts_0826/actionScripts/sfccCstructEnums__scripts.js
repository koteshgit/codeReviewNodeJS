
    const sfccCstructEnums = () => {
        var orderDetails = context.sfccGetOrdersDetails?.response?.body?.orders.slice(0,10)
items = []
for(i=0 ; i<orderDetails.length ; i++){
    for(j=0;j<orderDetails[i]?.line_items.length ; j++){
        items.push(orderDetails[i]?.line_items[j]?.id+'&'+orderDetails[i]?.id)
    }
}
context.itemsId = convertToEnumObj(items)
context.productTitle = convertToEnumObj(orderDetails?.flatMap(order => order.line_items.map(item => item.name)));
// context.itemsId.push({
//     name: 'Show More',
//     val: 'Show More',
//     syn: [ 'Show More' ]
// })


    }

