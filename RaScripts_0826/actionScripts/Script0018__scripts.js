
    const Script0018 = () => {
        var id = context.calculatedOrders.response.body?.data?.orderEditBegin?.calculatedOrder?.id
var bus  = context.session.BotUserSession
var calculatedId = id.split('/').pop()
var cancelReason = context.entities.cancelReason
var lineItemPayload = [{
        "id": "gid://shopify/CalculatedLineItem/"+context.lineItemId,
        "quantity": 0
    }]

context.editOrder = JSON.stringify({
    "calculatedOrderId" : calculatedId,
    "lineItems":lineItemPayload,
    "cancelreason" : cancelReason
})
    }

