var message = {
    "infobipWhatsAppMessageEndpoint": "/whatsapp/1/message/interactive/list",
    "body": {
        "text": "List of items"
    },
    "action": {
        "title": "Select your item",
        "sections": [
            {
                "rows": []
            }
        ]
    }
};

var info=context?.getOrdersDetails?.response.body.orders.find(order=>order.id==context.entities.displayReturnAndCancelOrders)||context?.getSpecificOrder?.response?.body?.order
var img=context.getProductId.response.body.data.products.edges
var elements = []
if(!context?.displayCount){
    context.displayCount=0
}
let whatsAppLineItems = {};
for(i=context.displayCount;i<info.line_items.length&&i<10;i++){
    koreDebugger.log(info.line_items[i])
    if(context.displayItems.includes(info.line_items[i].id.toString())){
        let desc = info.line_items[i].id.toString();
        
        
        let buttonImg = {
            
        "content": {
            "mediaUrl": img[i].node.images.edges[0].node.src||"https://cdn-icons-png.flaticon.com/512/825/825500.png",
            "caption": `*Product Name*: ${info.line_items[i].name}\n*Item Id*: ${info.line_items[i].id}\n*Item Price*: ${getFormattedCurrency(info.line_items[i].price)}`
        }
        }
    whatsAppLineItems[info.line_items[i].id.toString()] = buttonImg;
    
    
        message.action.sections[0].rows.push({
        "id": info.line_items[i].id.toString(),
        "title": info.line_items[i].id.toString(),
        "description": desc?.substring(0,72)
    })
        
    // elements.push({
    //     "icon": img[i].node.images.edges[0].node.src||"https://cdn-icons-png.flaticon.com/512/825/825500.png",
    //     "title": info.line_items[i].name,
    //     "flag":"cancelOrderTemplate", 
    //     "values": [
    //         {
    //             "title":"Order Date : ",
    //             "value":info?.created_at.split("T")[0],
    //             "style": {
    //                 "color": "#344054"
    //             }
    //         },
    //         {
    //             "title": "Item Price : ",
    //             "value": getFormattedCurrency(info.line_items[i]?.price)
    //         },
    //     ],
    //     "actions": {
    //         "type": "postback",
    //         "title": "You have selected item number : "+info.line_items[i].id,
    //         "value":  info.line_items[i].id.toString()
    //     }
    // })
    }       
}

context.whatsAppLineItems =whatsAppLineItems
context.totalItems = message.action.sections[0].rows.length
print(JSON.stringify(message));

