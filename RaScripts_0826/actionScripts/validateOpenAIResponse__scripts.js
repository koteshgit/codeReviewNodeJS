
    const validateOpenAIResponse = () => {
        var bus = context.session.BotUserSession;
let index = context.identifyRelavantQuery.response.body.choices[0].message.content;
if(index.toLowerCase().trim() != "i don't know" && parseInt(index) < 5){
    let obj = context.searchResults[index-1];
    context.appResponse = {
        "content" : obj.response.replaceAll("&quot;","").replaceAll('"',""),
        "references": obj.references
    }
    bus.IsPrevAnsFromCache = true; 
    bus.DocId = obj["doc_id"]; // Setting this on bus to delete the cache response by Using Doc_Id if user dislikes it 
    //CacheObject is key set on bus whenever response is shown to user either from main or Cacheapp. And this object is stored to delete / update in feedback dialog based on user feedback.
    context.session.BotUserSession.CacheObject = JSON.stringify({ 
    "name": "Cache",
    "documents": [{
        "response": context.appResponse.content,
        "query": obj.query,
        "references": obj.references
        }]
    })
    if(obj.isResponseLiked){
        context.session.BotUserSession.IsResponseLiked = obj.isResponseLiked;
    }
}


    }

