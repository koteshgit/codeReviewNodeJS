// var message = {
// 	"type": "template",
// 	"payload": {
// 		"template_type": "listWidget",
// 		"title": "Cart",
// 		"description": "",
// 		"elements": []
// 	},
// 	"screenIdentifier": "searchResults"
    
// };


// for(let i=0;i<info.length;i++){
//         var element={
// 				"image": {
//             "image_type": "image",
//             "image_src": info[i]?.node?.images?.edges[0]?.node?.src||"https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png",
//             "radius": 20,
//             "size": "large"
//         },
// 				"title": info[i]?.node?.title||"XXXX0.9 cu. ft. NeoChef™ Countertop Microwave with Smart Inverter and EasyClean®",
// 				"subtitle": "Quantity "+cartInfo[i]?.node?.quantity,
// 				"default_action": {
// 					"type": "postback",
// 					"payload": cartInfo[i]?.node?.id,
// 					"utterance": "Select"
// 				},
// 				"buttonsLayout": {
// 					"displayLimit": {
// 						"count": "2"
// 					},
// 					"style": "float"
// 				},
// 				"buttons": [{
// 					"type": "postback",
// 					"title": "Remove",
// 					"payload": cartInfo[i]?.node?.id,
// 					"utterance": "Remove"
// 				}]
// 			};
// message.payload.elements.push(element)
// }
// message.payload.elements.push({
// 			    "buttons": [{
// 					"type": "postback",
// 					"title": "Check out",
// 					"payload": "Check out",
// 					"utterance": "Check out"
// 				}]
			    
// 			});

			
			

        
// print(JSON.stringify(message));
















info=context.getProductId.response.body.data?.products?.edges;
cartInfo=context.getCartItems.response.body.data?.cart?.lines?.edges; 
checkoutPayload={
    lineItems:cartInfo.map(item => item.node),
    action:"checkout"
}



var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Select the items for checkout",
        "showMore": "true",
        "showMoreTitle": "Show More", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements": [],
        "buttons": [
            {
                "title": "Continue Shopping",
                //"buttonTitle": "Continue Shopping",
                "type": "ContinueShopping",
                "value": "Continue Shopping",
                "buttonStyle": {
                    "background": "#344054",
                    "color": "#FFF",
                    "width": "48%",
                    "border": "1px solid #344054"
                }
            },
            {  // Enable for Single button
                "title": "Checkout",
                //"buttonTitle": "Show more",
                "type": "Checkout",
                "value":"Let's proceed to check out",
                "buttonStyle":{
                    "background":"#fff",
                    "color":"#404040",
                    "width":"48%"
                }
            }
        ]
    }
};

elements = []

for(i=0; i<cartInfo.length ; i++){
    sku=cartInfo[i].node.attributes[0].value
    elements.push({
                "icon":context.imageSkuMap[sku]||"https://ci6.googleusercontent.com/proxy/lOYRwSWZnm41Uo-K7H8_liFaWkBP1aT9xG367iZ4i64eDKjlysJNIWXvvv1UNBjIhCOnG2A4-_I40cU0GjYe8J1iGlPkQh97=s0-d-e1-ft#https://cdn-icons-png.flaticon.com/512/825/825500.png",
                "title":  context.titleSkuMap[sku],
                //"subTitle":  info[i]?.node?.title, // value should be subtitle
                "flag": "cartScreen",
                "qty": cartInfo[i]?.node?.quantity,
                "value": cartInfo[i]?.node?.id,
                "checkBox": "enabled", // this property for checkbox
                "button1": {
                    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjI1IDhIMTIuMzc1IiBzdHJva2U9IiNEMEQ1REQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
                    "buttonTitle": "Decrement",
                    "type": "postback",
                    "value": "Delete",
                    "buttonStyle": {
                        "border-radius": "4px",
                        "border": "1px solid #D0D5DD",
                        "background": "#F9FAFB"
                    },
                },
                "button2": {
                    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwMTYgMy4zMzMzNFYxMi42NjY3TTMuMzMzNSA4LjAwMDAxSDEyLjY2NjgiIHN0cm9rZT0iI0ZFRkVGRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
                    "buttonTitle": "increment",
                    "type": "postback",
                    "value": "increment",
                    "buttonStyle": {
                        "color": "#F9FAFB",
                        "border-radius": "4px",
                        "border": "1px solid #12B76A",
                        "background": "#12B76A"
                    },
                },
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
                        "value": getFormattedCurrency(context.priceSkuMap[sku]),
                        "detailStyle": {
                            "color": "#101828",
                            "font-size": "12px",
                            "font-weight": "600"
                        },
                    },
                ],

                "buttons": [
                    {
                        "title": "Remove",
                        "buttonTitle": "Show more",
                        "type": "postback",
                        "value": cartInfo[i]?.node?.id+" remove",
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



print(JSON.stringify(message))
