koreDebugger.log(context.displayItems)
var items = context.orderData.line_items.find(item=>item.id==context.displayItems[0])
var elements = [{
        "title": items.name,
        "image_url": items?.itemImgUrl||"",
        "subtitle": "Price : "+items.price+"\n"+"Quantity :"+items.quantity,
    }];
var message = {
    "type": 'template',
    "payload": {
        "template_type": 'carousel',
        "elements": []
    }
};
message.payload.elements = elements;
print(JSON.stringify(message));
