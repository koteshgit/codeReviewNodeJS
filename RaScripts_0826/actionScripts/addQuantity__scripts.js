
    const addQuantity = () => {
        var bus = context.session.BotUserSession
var msg=bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text
koreDebugger.log("payload: "+msg)
context.cartQuantity=parseInt(context.entities.searchResults.split("#")[1])
koreDebugger.log("quantity "+parseInt(context.entities.searchResults.split("#")[1]))
    }

