var info = context.fetchDeliveryAddressDetails.response.body.addresses;
var message = {
  "text": "Default Address",
  "quick_replies": []
};

for (var i = 0; i < info.length; i++) {
  var title = info[i].address1 + " " + info[i].address2;
  var quick_reply = {
    "content_type": "text",
    "title": title,
    "payload": "payload1" // <-- Check this line
  };
  message.quick_replies.push(quick_reply);
}

print(JSON.stringify(message));

