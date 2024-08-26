lineItems = context?.createAnOrder?.response?.body?.order?.line_items
var orderData = context?.createAnOrder?.response?.body?.order


var address = context.shippingAddress.address1+", "+context.shippingAddress.city+", "+context.shippingAddress.zip

var message ={
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Order Details",
        "showMore": "false",
        "showMoreTitle": "show More", // we can customize
        "displayLimit": "3", // limit for show more
        "isSelectionEnabled": "true",
        "elements": []
    }
}

elements = []
j = lineItems.length
for(i=0;i<lineItems.length ; i++){
    j = j-1
    koreDebugger.log(lineItems[i].sku)
    currentItem = {
                "icon": context.imageSkuMap[lineItems[i].sku].imageUrl || context.imageSkuMap[lineItems[i].sku],
                "title": lineItems[i].name,
                //"subTitle": , // value should be subtitle
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
                        "value": lineItems[i].quantity,
                        "detailStyle": {
                            "color": "#344054",
                            "font-size": "12px",
                            "font-weight": "400"
                        },
                    },
                ]
            }
            
    if(j==0){
        currentItem["descriptionDetails"] =  [
                    {
                        "title": "Order ID",
                        "value": ": "+orderData.id,
                    },
                   {
                        "title": "Order Status",
                        "value": ": Placed",
                        "valueStyle": {
                        "color": "#039855",
                         },
                    },
                    {
                        "title":"Shipping Address",
                        "value":": "+address
                    },
                    {
                        "title": "Estimated Delivery",
                        "value": ": "+getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000))
                    }
                ]

    }
           
    elements.push(currentItem) 
    
}


message.payload.elements = elements

print(JSON.stringify(message));
