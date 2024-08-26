
    const prepUpdateCartItems = () => {
        var bus=context.session.BotUserSession
var lastMsg=JSON.parse(bus?.lastMessage?.messagePayload?.message?.text||bus?.lastMessage?.messagePayload?.message?.body).selectedItems
var info=context.getCartItems.response.body.data.cart.lines.edges
context.updateCartPayload={
    "cartId": context.getCartId.response.body.metafields[0].value,
    "lines": []
}
for(let i=0;i<info.length;i++){
    koreDebugger.log(lastMsg.find(item => item.id.includes(info[i]?.node?.id)))
    if(lastMsg.find(item => item.id.includes(info[i]?.node?.id))){
        cartDetails=lastMsg.find(item => item.id==info[i]?.node?.id)
    context.updateCartPayload.lines.push({
        "id": cartDetails.id,
        "quantity": cartDetails.quantity,
        "attributes":[{
            "key": "SKU",
            "value": info[i].node.attributes[0].value
        }]
    })
    }
}
context.updateCartPayload=JSON.stringify(context.updateCartPayload)
koreDebugger.log(context.updateCartPayload)
    }

