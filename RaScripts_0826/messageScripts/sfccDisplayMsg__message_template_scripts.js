lineItems = context?.sfccCreateAnOrder?.response?.body?.productItems
var orderData = context?.sfccCreateAnOrder?.response?.body

// var message = {
//     "type": "template",
//     "payload": {
//         "template_type": "listWidget",
//         "title": "Order: "+context.createAnOrder.response.body?.order?.id||"12345678",
//         "description": "",
//         "elements": []
//     },
// }
// var order=context.orderPayload.order
// message.payload.elements.push({
//         "image": {
//             "image_type": "image",
//             "image_src": order?.line_items[0]?.itemImgUrl||"https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png",
//             "radius": 20,
//             "size": "large"
//         },
//         "title": order.line_items[0]?.title||"",
//         "subtitle": "QTY:"+order.line_items[0]?.quantity||"1"+"\n" + "Price x $" + order.line_items[0]?.price||"0$"+".00",
//         "details": [{
//             "description": "Shipping Address: " + context.shippingAddress?.address1 +" "+context.shippingAddress?.address2+"\n"+context.shippingAddress?.city+" "+context.shippingAddress?.country+" "+context.shippingAddress?.zip
//         }, {
//             "description":"Estimated delivery by "+getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000)) //""+deliverdOnOrEstimate+ ": " + foundOrder.orderDate.split('|')[0].trim()
//         }]
//     })
    
// print(JSON.stringify(message));

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
    koreDebugger.log(context.productDetails.itemImgUrl)
    currentItem = {
                "icon": context.productDetails.itemImgUrl,
                "title": lineItems[i].productName,
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
                        "value": ": "+orderData.orderNo,
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
