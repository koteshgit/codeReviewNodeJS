
    const prepCancelOrderPayload = () => {
        context.caluculatedOrder  =JSON.stringify({
    "orderId" : context.entities.showOrders
})

context.isPayload = true
var bus = context.session.BotUserSession
// Check if the number of eligible line items is not exactly one
if(context.eligibleLineItems.length!=1){
    try {
        arr = []
    let bus = context.session.BotUserSession;
    let channel = bus?.channels[0]?.type;
    koreDebugger.log("BUS cancelITEM lineitemId"+JSON.stringify(bus));
    if(channel?.toLowerCase() == "whatsapp") {
        let itemId;
        if(context.entities.displayLineItems){
            itemId = context.entities.displayLineItems;
        } else {
            itemId = bus?.channels?.[0]?.body || bus?.lastMessage?.messagePayload?.message?.body || bus?.lastMessage?.messagePayload?.message?.text || bus?.lastMessage?.messagePayload?.message?.renderMsg;
        }
        koreDebugger.log("cancel lineitemId"+itemId);
        arr.push(itemId);
    } else {
    // Retrieve the last message from the user session, using optional chaining and logical OR to handle missing properties
    var msg = bus?.lastMessage?.messagePayload?.message?.body || bus?.lastMessage?.messagePayload?.message?.text || bus?.lastMessage?.messagePayload?.message?.renderMsg
    var lineItems = JSON.parse(msg).selectedItems
    // Loop through each item in the selected line items & push each line item ID into array
    for (i = 0; i < lineItems.length; i++) {
        arr.push(lineItems[i].id)
    }
    
    }
    context.entities.displayLineItems = arr
}
    catch (err) {
    context.isPayload = false
    }
}
    }

