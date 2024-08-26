var item = context.eligibleLineItems[0] 
var order = context.eligibleOrders
var orderDate = context.eligibleOrders.created_at.split("T")[0]
// var itemImage=context.getProductId.response.body?.data?.products?.edges[0]?.node?.images?.edges[0]?.node?.src
// var elements = [ {
//         "title": item.name,
//         "image_url": context.eligibleLineItems[0].imageUrl||"https://cdn-icons-png.flaticon.com/512/825/825500.png",
//         "subtitle":"Item Id : "+item.id+"\nSku : "+item.sku+"\nPrice : $"+item.price ,
//     }];
// var message = {
//     "type": 'template',
//     "payload": {
//         "template_type": 'carousel',
//         "elements": []
//     }
// };
// message.payload.elements = elements;
// print(JSON.stringify(message));

context.entities.displayLineItems = [item.id]



var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Item eligible for cancel",
        "showMore": "true",
        "showMoreTitle": "show More", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements":[{
                "icon": context.eligibleLineItems[0].imageUrl||"https://cdn-icons-png.flaticon.com/512/825/825500.png",
                "title": item.name,
                "subTitle": "SKU :"+item.sku, // value should be subtitle
                "flag": "ItemdetailsScreen",
                "titleStyle": {
                    "color": "#101828",
                    "font-size": "12px",
                },
                "subTitleStyle": {
                    "color": "#101828",
                    "font-size": "14px",
                },
                "description": [
                    {
                        "title": "Qty:",
                        "value": item.quantity,
                        "detailStyle": {
                            "color": "#344054",
                            "font-size": "12px",
                            "font-weight": "400"
                        },
                    },
                ],
                "descriptionDetails": [
                    {
                        "title": "Order Date",
                        "value": ": "+orderDate,

                    },
                    {
                        "title": "Order ID",
                        "value": ": "+order.id,
                    },
                    {
                        "title": "Price",
                        "value": ": "+getFormattedCurrency(item.price),
                    }
                    
                ]

            }]
    }

}

var agentMsg = "Item eligible for cancel \n"
var len = Math.min(3,message.payload.elements.length)
for (let i = 0; i < len; i++) {
    agentMsg += "________________________________\n"
    let ele = message.payload.elements[i];
    agentMsg += ele.title + "\n";
    agentMsg += ele.subTitle + "\n";
    agentMsg += ele.description[0].title + " " + ele.description[0].value + "\n";
    for(let obj of ele.descriptionDetails){
        agentMsg += obj.title + "       " + obj.value + "\n";
    }
}
message["text"] = agentMsg;
print(JSON.stringify(message));


