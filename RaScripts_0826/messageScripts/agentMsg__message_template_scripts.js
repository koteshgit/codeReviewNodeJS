var info = context.getConsolidateQuery?.response?.body?.metaData || [];
//koreDebugger.log(info);
var message = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "generic",
            "elements": [],
        }
    }
};
var resultLength = info.length > 10 ? 10 : info.length;
for (var i = 0; i < resultLength; i++) {
    var sub = getFormattedCurrency(info[i].price) + " (" + info[i].ratings + "★)" + "\n" + info[i].title + "\n" + info[i].keyFeatures
    //+ "\n" + " | " + info[i].categories
    var element = {
        "title": info[i].brand,
        "image_url": info[i].product_image,
        "subtitle": sub,
        "buttons": [{
            "type": "postback",
            "title": "🛍 Buy now",
            "payload": "Buy Now "+info[i].modelCode+"#1"
            // + " " + (context.deliveryDate || '') + (context.entities.typeOfDelivery || '')
        },
        {
            "type": "postback",
            "title": "🛒 Add to cart",
            "payload": "Add to cart : " + info[i].modelCode+"#1"
        }]
    };
    message.attachment.payload.elements.push(element);
}
print(JSON.stringify(message));
