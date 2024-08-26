
    const prepEditPayload = () => {
        var id = context.calculatedOrders.response.body?.data?.orderEditBegin?.calculatedOrder?.id
var bus  = context.session.BotUserSession
var calculatedId = id.split('/').pop()
var lineItemPayload = []
// Loop through each displayLineItem in the context entities, if they exist
for (i = 0; i < context?.entities?.displayLineItems.length; i++){
    // Push a new object for each line item with its ID and a quantity of 0 into the lineItemPayload array
    lineItemPayload.push({
        "id": "gid://shopify/CalculatedLineItem/"+context.entities.displayLineItems[i],
        "quantity": 0
    })
} 
// Attempt to retrieve the cancel reason from the last message payload, handling missing properties with optional chaining and logical OR
var cancelReason = bus?.lastMessage?.messagePayload?.message?.body || bus?.lastMessage?.messagePayload?.message?.text || bus?.lastMessage?.messagePayload?.message?.renderMsg  //Incase User didn't choose from list of enumerated
// var cancelReason = context.entities.cancelReason
// if(context.entities.otherReason){
//     cancelReason = context.entities.otherReason
// }
koreDebugger.log(cancelReason)
context.editOrder = JSON.stringify({
    "calculatedOrderId" : calculatedId,
    "lineItems":lineItemPayload,
    "cancelreason" : cancelReason
})

    }

