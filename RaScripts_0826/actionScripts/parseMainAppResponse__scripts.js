
    const parseMainAppResponse = () => {
        var resp = context.mainAppSearch.response.body.template.graph_answer.payload;
var bus = context.session.BotUserSession;
if(Object.keys(resp).length == 0){
    context.noGraphAnswer = true;
}else{
    let response="";
    let docLinks = {};
    resp = resp["center_panel"].data?.[0]?.["snippet_content"];
    resp.forEach(i=>{
        i.sources.forEach(j=>{
            if(j.title != ""){
                docLinks[j.title] = j.url;
            }
        })
    });
    
    context.docLinks = docLinks;
    resp = resp?.map(i=>i["answer_fragment"]);
    resp.forEach(i=>{
        response += i
    });
    context.response = response;
    if(context.session.BotUserSession.DocSearchSettings.isCacheEnabled == true){
    context.session.BotUserSession.CacheObject = JSON.stringify({
    "name": "Cache",
    "documents": [{
        "response": context.response?.replaceAll('"',"") || undefined,
        "query": bus.UserQuery,
        "references" : context.docLinks
        }]
    })
    }
}
    }

