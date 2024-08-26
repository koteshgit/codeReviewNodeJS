
    const prepMainAppPayload = () => {
        var bus = context.session.BotUserSession;

let mainAppPayload = {
    //Context.actualQuery is set in the cacheappPayload. so When Cache is disabled user Query is retrieved from the last message.
    "query": context.session.BotUserSession.DocSearchSettings.isCacheEnabled == true ? context.actualQuery : bus.lastMessage?.messagePayload?.message?.body || bus.lastMessage?.messagePayload?.message?.text || " user input not found ",
    "answerSearch":true,
}

//When User Dislikes the Cache App result ,  We need to retreive the last user Query from the bus because last message may get altered in between.
if(bus.DislikesCachedResponse){
    mainAppPayload.query = bus.UserQuery;
    BotUserSession.delete("DislikesCachedResponse");
}
context.mainAppPayload = JSON.stringify(mainAppPayload);
    }

