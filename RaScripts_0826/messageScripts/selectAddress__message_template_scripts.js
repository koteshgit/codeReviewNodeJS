var info = context.fetchDeliveryAddressDetails.response.body.addresses;
const defaultIndex = info.findIndex(address => address.default === true);
if (defaultIndex > 0) {
    var firstAddress = info[0];
    info[0] = info[defaultIndex];
    info[defaultIndex] = firstAddress;
}
var message = {
    "text": "Here are your delivery addresses:",
    "quick_replies": []
};
context.displayAddressCount = context.displayAddressCount || 0; 
var i=0;
for (i = context.displayAddressCount; i < info.length && i < context.displayAddressCount+5; i++) {
    var title = info[i].address1 + " " + info[i].address2 + ", " + info[i].city + " " + info[i].country;
    var subtitle = "Zipcode: " + info[i].zip;
    if (i == 0) {
        subtitle += " (Default)";
    }
    var quick_reply = {
        "content_type": "text",
        "title": title,
        "payload": info[i].id
    };
    message.quick_replies.push(quick_reply);
}
if (i < info.length) {
    var viewMoreQuickReply = {
        "content_type": "text",
        "title": "View More",
        "payload": "View More"
    };
    message.quick_replies.push(viewMoreQuickReply);
}

print(JSON.stringify(message));

