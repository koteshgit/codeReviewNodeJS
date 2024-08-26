
    const prepDelCachePayload = () => {
        
context.deletePayload=JSON.stringify({
  "docIds": [
     context.session.BotUserSession.DocId
  ]
})

if(context.session.BotUserSession.IsPrevAnsFromCache && context.entities.captureFeedback == "0"){
    context.session.BotUserSession.DislikesCachedResponse = true;
}
if(context.session.BotUserSession.IsResponseLiked){
    context.isResponseLiked = context.session.BotUserSession.IsResponseLiked;
    BotUserSession.delete("IsResponseLiked");
}

    }

