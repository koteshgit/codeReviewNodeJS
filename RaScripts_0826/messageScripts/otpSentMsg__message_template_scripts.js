// var items = context.lineItems
var ordersData = context.sfccGetOrdersDetails?.response?.body?.orders;
var lineItems = []
var productData = []
var specificOrder = context.sfccGetSpecificOrder?.response?.body
if(specificOrder?.order?.id && specificOrder?.order?.email == context.session.BotUserSession.UserInfo.email ){
    var ordersData = [specificOrder?.order]
}
if (context.entities.hTitleName) {
    for (i = 0; i < ordersData.length; i++) {
        for (j = 0; j < ordersData[i].line_items.length; j++) {
            let lineItem = ordersData[i].line_items[j]
            if (lineItem.name == context.entities.hTitleName) {
                productData.push({
                    "orderId": ordersData[i].id,
                    "itemId": lineItem.id,
                    "title": lineItem.name,
                    "price": lineItem.price,
                    "sku": lineItem.id,
                    "quantity":lineItem.quantity,
                    "image" : lineItem.image
                })
            }
        }

    }
}


if(productData.length==0){
for(i=0;i<ordersData.length ; i++){
    for(j=0 ; j<ordersData[i].line_items.length ; j++){
        let lineItem = ordersData[i].line_items[j]
        lineItems.push({
            "orderId" : ordersData[i].id,
            "itemId" : lineItem.id,
            "title" : lineItem.name,
            "price" : lineItem.price,
            "sku": lineItem.id,
            "quantity":lineItem.quantity,
            "image" : lineItem.image
        })
    }
    
}

}
else{
    lineItems = productData
}

var items = lineItems
// var message = {
//     "type": "template",
//     "AlwaysShowGlobalButtons": false,
//     "payload": {
//         "template_type": "list",
//         "elements": [],
//         "buttons": []
//     }
// }
// var elements = []
// var fullLength = items.length;
// if (fullLength < 3) {
//     context.showMoreClickCount=0;
// }
// for (let i = context.showMoreClickCount; i < fullLength; i++) {
//     elements.push({
//         "title": items[i].title,
//         "image_url": context.imageSkuMap[items[i].sku],
//         "subtitle": "Item Id : "+items[i].itemId +"\nPrice : "+getFormattedCurrency(items[i].price)+"\nQuantity : "+items[i].quantity,//text
//         "buttons": [{
//             "title": "Select",
//             "type": "postback",
//             "payload": items[i].itemId+"&"+items[i].orderId
//         }]
//     })
// }
// message.payload.elements = elements;
// if(fullLength - context.showMoreClickCount -3 > 0){
//     message.payload.buttons=[{
//         "title": "Show More",
//         "type": "postback",
//         "payload": "Show More"
//     }]
// }

// print(JSON.stringify(message));



var message = {
    "type": "template",
    //"text":"test for agent",
    "payload": {
        "template_type": "retailOrderSelection",
        // "text":"test for agent",
        // "dummyKey" : "Dummy",
        "card_type": "detail",
        "title": "Select your item",
        "showMore": "true",
        "showMoreTitle": "Show more", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements":[]
    }
    
}
var fullLength = items.length;
// if (fullLength < 4) {
//     message.payload.showMore = "false"
//     context.showMoreClickCount=0;
// }
elements = []
for(i=context.showMoreClickCount;i<fullLength ; i++){
    elements.push({
                "icon":items[i].image,
                "title": items[i].title, // title
                //"subTitle": "Price : "+getFormattedCurrency(items[i].price)+"\nQuantity : "+items[i].quantity, // sub-title
                //"value": "Delivered", // value
                "titleStyle": {
                    "color": "#101828",
                    "font-size": "12px",
                },
                // "subTitleStyle": {
                //     "color": "#101828",
                //     "font-size": "14px",
                // },
                // "valueStyle": {   // change to valuestyle
                //     "color": "#12B76A",
                //     "background": "#ECFDF3",
                //     "font-size": "12px",
                //     "font-weight": "500"
                // },
                "description": [
                    {
                        "title": "Item ID : ",
                        "value": items[i].itemId,
                        "detailStyle": {
                            "color": "#344054",
                            "font-size": "12px",
                            "font-weight": "400"
                        },
                    },{
                        "title": "Price : ",
                        "value": getFormattedCurrency(items[i].price),
                        "detailStyle": {
                            "color": "#344054",
                            "font-size": "12px",
                            "font-weight": "400"
                        },
                    },
                ],

                "buttons": [
                    {
                        "title": "View Details",
                        //"buttonTitle": "Show more",
                        "type": "postback",
                        "value": "status item "+items[i].itemId+"&"+items[i].orderId,
                        "payload": "status item "+items[i].itemId+"&"+items[i].orderId,
                        "buttonStyle": {
                            "color": "#101828",
                            "border-radius": "4px",
                            "border": "1px solid #D0D5DD",
                            "background": "#fff"
                        },
                    }
                ],

            })
}

message.payload.elements = elements


var agentMsg = "Select your Order\n";
var len = Math.min(3,fullLength)
for (let i = 0; i < len; i++) {
  agentMsg += "________________________________\n"
  let ele = message.payload.elements[i];
  agentMsg += "Title : " + ele.title + "\n"
  agentMsg += ele.description[0].title + " " + ele.description[0].value + "\n";
  agentMsg += ele.description[1].title + " " + ele.description[1].value + "\n";
}
message["text"] = agentMsg;

print(JSON.stringify(message))

