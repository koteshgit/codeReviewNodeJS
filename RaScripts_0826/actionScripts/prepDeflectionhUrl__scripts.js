
    const prepDeflectionhUrl = () => {
        var bus = context.session.BotUserSession;
var actualQuery = bus.lastMessage?.messagePayload?.message?.body || bus.lastMessage?.messagePayload?.message?.text || " user input not found ";
if(context.entities?.hSkuId){
    actualQuery = "get the product with SKU : " + context.entities.hSkuId;
}
var longUrl = env.deflectionURL + '?query=' + actualQuery;
context.getShortUrlPayload = JSON.stringify({
    "url":longUrl
})
    }

