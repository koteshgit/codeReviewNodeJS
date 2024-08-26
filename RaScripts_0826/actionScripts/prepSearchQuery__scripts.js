
    const prepSearchQuery = () => {
        context.userId =  getUserId();
var bus = context.session.BotUserSession;
context.actualQuery = bus.lastMessage?.messagePayload?.message?.body || bus.lastMessage?.messagePayload?.message?.text || bus.lastMessage?.messagePayload?.entry[0]?.messaging[0]?.message?.text || " user input not found ";
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
koreDebugger.log("Print " + eCommercePlatform);


var pineconeIndex = env.indexName;
if (eCommercePlatform == "Shopify") {
    pineconeIndex = env.indexName
} else if(eCommercePlatform == "SFCC") {
    pineconeIndex = env.sfccPineConeIndex;
}
var cstrtPromptPayload = {
    "query":context.actualQuery,
    "sessionId":context.userId,
    "indexName": pineconeIndex
};
var cstrtShowResultPayload = {
    "sessionId":context.userId,
    "indexName": pineconeIndex
}
var classifyQuery = {
    "query": context.actualQuery, 
    "sessionId": context.userId,
    "indexName": env.indexName,
   "namespace": "bigbox-test-index"
}
var processQuery = {
    "sessionId": context.userId,
    "indexName": env.indexName,
    "namespace": "bigbox-test-index"
}
var presentQuery = {
    "sessionId": context.userId,
    "indexName": env.indexName
}
context.cstrtShowResultPayload = JSON.stringify(cstrtShowResultPayload);
context.cstrtPromptPayload = JSON.stringify(cstrtPromptPayload);
// koreDebugger.log(JSON.stringify(context.session.BotUserSession))
context.classifyQuery = JSON.stringify(classifyQuery)
context.processQueryPayload = JSON.stringify(processQuery)
context.presentQuery = JSON.stringify(presentQuery)
    }

