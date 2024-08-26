
    const setLikeFlagToObject = () => {
        let obj = JSON.parse(context.session.BotUserSession.CacheObject);
obj.documents[0]["isResponseLiked"] = true;

context.session.BotUserSession.CacheObject = JSON.stringify(obj);
koreDebugger.log("Cache Object : "+ JSON.stringify(context.session.BotUserSession.CacheObject));
    }

