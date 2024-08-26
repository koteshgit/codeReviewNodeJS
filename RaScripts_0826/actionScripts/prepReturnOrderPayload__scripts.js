
    const prepReturnOrderPayload = () => {
        var RegxExp = /^\d{14}$/;
if (context.entities.recentItems) {
    var selectedItems=JSON.parse(context.selectedItems).selectedItems
   var items=[]
    for(i=0;i<selectedItems.length;i++){
        items.push(selectedItems[i].id)
    }
} else {
    var items = [context.orderData.line_items[0].id];
}

var fullfilments = context.fullfilmentRequest.response.body.fulfillments;

customerNote ="Modes of return: "+ context.entities.modeOfReturn
if(context.entities.otherReasonForReturn){
    customerNote = context?.entities?.otherReasonForReturn+ "Modes of return: "+context.entities.modeOfReturn
}

const fullfilmentLookup = {};
// fullfilments.forEach((fulfillment) => {
//   fullfilmentLookup[fulfillment.id] = fulfillment.fulfillment_line_item_id;
// });
for(i=0;i<fullfilments.length ; i++){
    for(j=0;j<fullfilments[i].line_items.length ; j++){
        fullfilmentLookup[fullfilments[i].line_items[j].id] = fullfilments[i].line_items[j].fulfillment_line_item_id;
    }
}
koreDebugger.log("LookUp"+JSON.stringify(fullfilmentLookup))
var returnLineItems = items.map((itemId) => {
  if (fullfilmentLookup[itemId]) {
      koreDebugger.log("FullfillemntId"+itemId)
    return {
      fulfillmentLineItemId: "gid://shopify/FulfillmentLineItem/" + fullfilmentLookup[itemId],
      quantity: 1,
      returnReason: context.entities?.returnReason,
      customerNote: customerNote
    };
  }
});


context.returnOrder = JSON.stringify({
    "query": "mutation ReturnRequest($input: ReturnRequestInput!) { returnRequest(input: $input) { userErrors { field message } return { id status returnLineItems(first: 10) { edges { node { id returnReason customerNote } } } order { id } } } }",
    "variables": {
        "input": {
            "orderId": "gid://shopify/Order/" + JSON.parse(context.orderInfoPayload).orderId,
            "returnLineItems": returnLineItems
        }
    }
});



koreDebugger.log(returnLineItems)
    }

