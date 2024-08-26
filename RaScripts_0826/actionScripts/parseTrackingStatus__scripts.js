
    const parseTrackingStatus = () => {
        orderStatus=context.getAllOrdersTrackingInfo?.response?.body
context.orderStatus=[]
for(i=0;i<orderStatus.length;i++){
    context.orderStatus.push(orderStatus[i])
    var order=context.orderStatus[i]
    order["id"]=context.orderIds[i]
}
context.orderStatus = context.orderStatus.filter(order => order.statusCode === 200);
// context.orderStatus = context.orderStatus.map(item => {
//         const { statusCode, index, id } = item;
//         const resultObj = item.result;
//         const resultArray = Object.keys(resultObj).map(key => {
//             return {
//                 id: key,
//                 status: resultObj[key]
//             };
//         });
//         return {
//             statusCode: statusCode,
//             result: resultArray,
//             index: index,
//             id: id
//         };
//     });
for(i=0;i<context.orderStatus.length;i++){
    parsedJSON=context.orderStatus[i].result
var transformedArray = [];
  for (let key in parsedJSON) {
    if (parsedJSON.hasOwnProperty(key)) {
      var newObj = {
        id: key,
        ...parsedJSON[key]
      };
      transformedArray.push(newObj);
    }
  }
  context.orderStatus[i].result=transformedArray
}
    orders=context?.getOrdersDetails.response.body.orders||context?.getSpecificOrder.response.body
for(i=0;i<context.orderStatus.length;i++){
    order=orders.find(order=>order.id==context.orderStatus[i].id)
    // koreDebugger.log(JSON.stringify(order))
    // koreDebugger.log(context.orderStatus[i].id)
    items=order.line_items
    context.orderStatus[i].created_at=order.created_at
    for(j=0;j<context.orderStatus[i].result.length;j++){
        item=items.find(item=>item.id==context.orderStatus[i].result[j].id)
        context.orderStatus[i].result[j].name=item.name
        
    }
}
 context.orderStatus = context.orderStatus.filter(order => {
    order.result = order.result.filter(item => ["Cancelled", "Return Rejected", "Return In Progress", "Return Requested", "Returned", "Return Declined"].includes(item.status));
    return order.result.length > 0;
});

    }

