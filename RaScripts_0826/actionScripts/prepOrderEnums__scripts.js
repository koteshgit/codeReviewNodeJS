
    const prepOrderEnums = () => {
        var orderDetails = context.getCancelableItems?.response?.body?.eligibleOrders;

var arr = [];
for (var i = 0; i < orderDetails.length; i++) {
    for (var j = 0; j < orderDetails[i].line_items.length; j++) {
        arr.push({
            "orderId": orderDetails[i].id,
            "lineItemId": orderDetails[i].line_items[j].id,
            "name": orderDetails[i].line_items[j].name,
            "date": orderDetails[i].created_at.split('T')[0] 
        });
    }
}

// Assigning the constructed array to `context.data`
context.data = arr;

context.orders = convertToEnumObj(orderDetails.map(item => item.id));
context.productTitle = strictEnumObj(orderDetails.flatMap(order => order.line_items.map(item => item.name)));

// context.orders.push({
//     name: 'Show More',
//     val: 'Show More',
//     syn: [ 'Show More' ]
// });

context.isDigitalGenAIEnabled = env.isDigitalGenAIEnabled;

//Present Date --==
context.date = new Date()






// var orderDetails =  context.getCancelableItems?.response?.body?.eligibleOrders
// context.orders = convertToEnumObj(orderDetails.map(item=>item.id))
// context.productTitle = strictEnumObj(orderDetails.flatMap(order => order.line_items.map(item => item.name)));

// context.orders.push({
//     name: 'Show More',
//     val: 'Show More',
//     syn: [ 'Show More' ]
// })
    }

