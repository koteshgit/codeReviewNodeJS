
    const prepDocumentSearch = () => {
        var bus = context.session.BotUserSession;
context.actualQuery = bus.lastMessage?.messagePayload?.message?.body || bus.lastMessage?.messagePayload?.message?.text || " user input not found ";
let bodyForSearchAssist = {
    "query": context.actualQuery,
    "queryType": "relevanceWithMetaFilter"
}
context.bodyForSearchAssist = JSON.stringify(bodyForSearchAssist);
    }

