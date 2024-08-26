
    const prepCacheAppPayload = () => {
        var bus=context.session.BotUserSession;
context.actualQuery = bus.lastMessage?.messagePayload?.message?.body || bus.lastMessage?.messagePayload?.message?.text || " user input not found ";
bus.UserQuery = context.actualQuery;

context.cacheAppPayload=JSON.stringify({
  "query": context.actualQuery,
  "maxNumOfResults": bus.DocSearchSettings.cacheApp.maxNumOfResults
})

koreDebugger.log("cacheAppPayload : "+context.cacheAppPayload);
    }

