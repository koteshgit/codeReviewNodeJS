// var items = context.lineItems
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
koreDebugger.log("Print " + eCommercePlatform)

if (eCommercePlatform == "Shopify") {
    let data;
    if (context.GenerativeAINode?.GenAIPromptFindAnOrder) {
        try {
            data = JSON.stringify(context.GenerativeAINode.GenAIPromptFindAnOrder);
        } catch (error) {
            koreDebugger.log("Error stringifying data: " + error.message);
        }
    }
    var ordersData = context.getOrdersDetails?.response?.body?.orders;
    var lineItems = []
    var productData = []
    var specificOrder = context.getSpecificOrder?.response?.body
    if (specificOrder?.order?.id && specificOrder?.order?.email == context.session.BotUserSession.UserInfo.email) {
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
                        "sku": lineItem.sku,
                        "quantity": lineItem.quantity
                    })
                }
            }
        }
    }

    if (productData.length == 0) {
        for (i = 0; i < ordersData.length; i++) {
            for (j = 0; j < ordersData[i].line_items.length; j++) {
                let lineItem = ordersData[i].line_items[j]
                lineItems.push({
                    "orderId": ordersData[i].id,
                    "itemId": lineItem.id,
                    "title": lineItem.name,
                    "price": lineItem.price,
                    "sku": lineItem.sku,
                    "quantity": lineItem.quantity
                })
            }
        }

    }
    else {
        lineItems = productData
    }

    var items = lineItems

    var message = {
        "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/list",
        "body": {
            "text": "List of items"
        },
        "action": {
            "title": "Please select one",
            "sections": []
        }
    }
    var fullLength = items.length;
    // if (fullLength < 4) {
    //     message.payload.showMore = "false"
    //     context.showMoreClickCount=0;
    // }
    let elements = []
    //Check if the `data` array contains any null values.
    if (!data || !env.isDigitalGenAIEnabled || data?.includes(null)) {
        for (var i = 0; i < fullLength; i++) {
            elements.push({
                title: items[i].itemId,
                description: items[i].title?.substring(0, 72),
                id: "status item " + items[i].itemId + "&" + items[i].orderId
            })
        }
    } else {
        for (i = 0; i < fullLength; i++) {
            //Check if the current `itemId` is included in the `data`.
            if (data?.includes(items[i].itemId.toString())) {
                elements.push({
                    title: items[i].itemId,
                    description: items[i].title?.substring(0, 72),
                    id: "status item " + items[i].itemId + "&" + items[i].orderId
                })
            }
        }
    }

    for (let i = 0; i < elements.length && i < 10; i++) {
    if(i % 10 === 0) { // For every 10th element, add a new section.
        message.action.sections.push({
            "title": "section " + (i / 10 + 1), 
            "rows": []
         })
     }
      message.action.sections[ message.action.sections.length - 1].rows.push(elements[i]); // Add element to the last section.
}


    // var agentMsg = "Select your Order\n";
    // var len = Math.min(3, message.payload.elements.length)
    // for (let i = 0; i < len; i++) {
    //   agentMsg += "________________________________\n"
    //   let ele = message.payload?.elements[i];
    //   agentMsg += "Title : " + ele.title + "\n"
    //   agentMsg += ele?.description[0]?.title + " " + ele?.description[0]?.value + "\n";
    //   agentMsg += ele?.description[1]?.title + " " + ele?.description[1]?.value + "\n";
    // }
    // message["text"] = agentMsg;


    print(JSON.stringify(message))


} else if (eCommercePlatform == "SFCC") {
    // var items = context.lineItems
    var ordersData = context.getOrdersDetails?.response?.body?.orders;
    var lineItems = []
    var productData = []
    var specificOrder = context.getSpecificOrder?.response?.body
    if (specificOrder?.order?.id && specificOrder?.order?.email == context.session.BotUserSession.UserInfo.email) {
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
                        "quantity": lineItem.quantity,
                        "image": lineItem.image
                    })
                }
            }

        }
    }


    if (productData.length == 0) {
        for (i = 0; i < ordersData.length; i++) {
            for (j = 0; j < ordersData[i].line_items.length; j++) {
                let lineItem = ordersData[i].line_items[j]
                lineItems.push({
                    "orderId": ordersData[i].id,
                    "itemId": lineItem.id,
                    "title": lineItem.name,
                    "price": lineItem.price,
                    "sku": lineItem.id,
                    "quantity": lineItem.quantity,
                    "image": lineItem.image
                })
            }

        }

    }
    else {
        lineItems = productData
    }

    var items = lineItems



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
            "elements": []
        }

    }
    var fullLength = items.length;
    // if (fullLength < 4) {
    //     message.payload.showMore = "false"
    //     context.showMoreClickCount=0;
    // }
    elements = []
    for (i = context.showMoreClickCount; i < fullLength; i++) {
        elements.push({
            "icon": context.imageSkuMap[items[i].itemId]?.imageUrl,
            "title": items[i].title, // title
            //"subTitle": "Price : "+getFormattedCurrency(items[i].price)+"\nQuantity : "+items[i].quantity, // sub-title
            //"value": "Delivered", // value
            "titleStyle": {
                "color": "#101828",
                "font-size": "12px",
            },


            "description": [
                {
                    "title": "Item ID : ",
                    "value": items[i].itemId,
                    "detailStyle": {
                        "color": "#344054",
                        "font-size": "12px",
                        "font-weight": "400"
                    },
                }, {
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
                    "value": "status item " + items[i].itemId + "&" + items[i].orderId,
                    "payload": "status item " + items[i].itemId + "&" + items[i].orderId,
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
    var len = Math.min(3, fullLength)
    for (let i = 0; i < len; i++) {
        agentMsg += "________________________________\n"
        let ele = message.payload.elements[i];
        agentMsg += "Title : " + ele.title + "\n"
        agentMsg += ele.description[0].title + " " + ele.description[0].value + "\n";
        agentMsg += ele.description[1].title + " " + ele.description[1].value + "\n";
    }
    message["text"] = agentMsg;

    print(JSON.stringify(message))

}

