
    const addMsgTags = () => {
        
if(context.entities.captureFeedback=="0"){
    tags.addMessageLevelTag("Like/Dislike","DisLike")
}else if(context.entities.captureFeedback =="1"){
    tags.addMessageLevelTag("Like/Dislike","Like")
}

if(context.entities.dislikeFeedbackMsg){
    tags.addMessageLevelTag("comments",context.entities.dislikeFeedbackMsg);
}else{
    tags.addMessageLevelTag("comments","User_Dislikes_Cache_Response");
}

if(context.session.BotUserSession.IsPrevAnsFromCacheCache && context.entities.captureFeedback=="1"){
    tags.addMessageLevelTag("cacheLike/Dislike","Like");
}else if(context.session.BotUserSession.IsPrevAnsFromCache && context.entities.captureFeedback=="0"){
    tags.addMessageLevelTag("cacheLike/Dislike","Dislike");
}

if(!(context.session.BotUserSession.IsPrevAnsFromCache) && context.entities.captureFeedback=="1"){
    tags.addMessageLevelTag("mainAppLike/Dislike","Like");
}else if(!(context.session.BotUserSession.IsPrevAnsFromCache) && context.entities.captureFeedback=="0"){
    tags.addMessageLevelTag("mainAppLike/Dislike","Dislike");
}

tags.addMessageLevelTag("userID",context.session.UserContext._id)
tags.addMessageLevelTag("UserQuery",context.session.BotUserSession.UserQuery)
tags.addMessageLevelTag("BotResponse",JSON.parse(context.session.BotUserSession.CacheObject).documents[0].response.replace(/<[^>]+>/g, ''));

    }

