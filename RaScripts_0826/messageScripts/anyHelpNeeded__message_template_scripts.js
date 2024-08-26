var item = context.orderData.line_items


var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Select your item",
        "showMore": "true",
        "showMoreTitle": "Show More", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements": [],
        "buttons": [
            {
                "title": "Return Items",
                // "buttonTitle": "Show more",
                // "type": "postback",
                "value": "Return Items",
                "buttonStyle": {
                    "background": "#344054",
                    "color": "#FFF",
                    "width": "48%",
                    "border": "1px solid #344054"
                }
            },
        ]
    }
}
var elements = []
displayItems=context.displayItems.map(str => parseInt(str))
deliveryDate=context.getOrderStatus.response?.body
for(i=0 ; i<item.length ; i++){
    koreDebugger.log(typeof item[i].id+" "+displayItems.includes(item[i].id))
    if(displayItems.includes(item[i].id)){
    elements.push({
                "icon":context.skuImages[item[i].sku]||"https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png",
                "title":  item[i].name,
                "subTitle":  "Item Id :"+item[i].id, // value should be subtitle
                "flag": "cancelScreen",
                "qty": item[i]?.quantity,
                "checkBox": "enabled", // this property for checkbox
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
                        "value":getFormattedCurrency(item[i].price),
                        "detailStyle": {
                            "color": "#101828",
                            "font-size": "12px",
                            "font-weight": "600"
                        },
                    },
                    {
                        "title": "Delivered On",
                        "value": deliveryDate[item[i].id.toString()]?.updatedAt.split("T")[0],
                        "detailStyle": {
                            "color": "#344054",
                            "font-size": "12px",
                            "font-weight": "400"
                        },
                    },
                ],
                "value":item[i].id
            })
        
    }
}

message.payload.elements = elements
agentMsg = ""
var len = Math.min(3,message.payload.elements.length)
for (let i = 0; i < len; i++) {
  let ele = message.payload.elements[i];
  agentMsg += "Item Details"
  agentMsg += "________________________________\n"
  agentMsg += ele.title + "\n";
  agentMsg += "Price"+ "    " + ele.description[0].value + "\n";
  agentMsg += ele.description[1].title + "    " + ele.description[1].value + "\n";
}
message["text"] = agentMsg;
print(JSON.stringify(message)); 

