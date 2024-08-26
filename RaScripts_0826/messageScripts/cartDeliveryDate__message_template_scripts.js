var info=context.getProductId.response.body.data?.products?.edges;
var cartInfo=context.getCartItems.response.body.data?.cart?.lines?.edges
var cartDetails=context.cartDetails.selectedItems

var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Review items",
        "showMore": "true",
        "showMoreTitle": "show More", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements": [],
        "buttons": [
            {
                "title": "Continue",
                //"buttonTitle": "Continue",
                "type": "postback",
                "value": "Continue",
                "buttonStyle": {
                    "background": "#344054",
                    "color": "#FFF",
                    "width": "48%",
                    "border": "1px solid #344054"
                }
            }]
    }
}    
for(let i=0;i<cartDetails.length;i++) {
    
        var elements={
                "icon": cartDetails[i].imageUrl,
                "title": cartDetails[i].title, //+"\n Excepted delivery by"+getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000)),
                "flag":"addressTemplate", 
                "values": [
                    ,{
                        "title": "Expected delivery date: " + getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000)),
                        "style": {
                            "color": "#344054"
                        }
                    },{
                        "title": "Qty: "+cartDetails[i].quantity+", ",
                        "style": {
                            "color": "#344054"
                        }
                    },{
                        "title": "Price: " +getFormattedCurrency(cartDetails[i].quantity*cartDetails[i].price),
                        "style": {
                            "color": "#344054"
                        }
                    }
                ],
               
        }
        message.payload.elements.push(elements)
    
}
print(JSON.stringify(message));
