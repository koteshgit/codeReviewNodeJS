
var items = context.orders
var info=context.getProductId.response.body.data?.products?.edges;
var message = {
    "type": "template",
    "AlwaysShowGlobalButtons": false,
    "payload": {
        "template_type": "list",
        "elements": [],
        "buttons": []
    }
}
var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Select your item",
        "showMore": "false",
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

context.displayOrdersCount=(context?.displayOrdersCount)||0
var fullLength = items.length;
k=context.displayOrdersCount
for (let i = context.displayOrdersCount; i < fullLength; i++) {
    for(let j=0;j<items[i].line_items.length;j++){
    elements.push({
                "icon":info[0]?.node?.images?.edges[0]?.node?.src||"https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png",
                "title":  items[i].line_items[j].name,
                "subTitle":  "Item Id :"+items[i].line_items[j].id, // value should be subtitle
                "flag": "cancelScreen",
                "qty": items[i].line_items[j]?.quantity,
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
                        "value":getFormattedCurrency(items[i].line_items[j]?.price),
                        "detailStyle": {
                            "color": "#101828",
                            "font-size": "12px",
                            "font-weight": "600"
                        },
                    }
                ],
                "value":items[i].line_items[j].id
            })
    k++
    }
}
message.payload.elements = elements;
context.totalItems = elements.length
print(JSON.stringify(message));

