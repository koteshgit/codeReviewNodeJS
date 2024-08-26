
    const prepRemoveCartItems = () => {
        var bus=context.session.BotUserSession
var msg=bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text
context.removeCartItemsPayload=JSON.stringify({
        "cartId": context.getCartId.response.body.metafields[0].value,
        "lineIds": [
            msg.split(" ")[0]
        ]
    })
koreDebugger.log(context.entities.displayCart.split(" ")[0])
koreDebugger.log(JSON.stringify(context.removeCartItemsPayload))    
    }

