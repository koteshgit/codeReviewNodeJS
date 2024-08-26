
    const passInfoToAgent = () => {
        // bus= context.session.BotUserSession
// agentUtils.setUserInfo(bus?.UserInfo);


var bus = context.session.BotUserSession;
koreDebugger.log("bus :"+JSON.stringify(bus?.UserInfo));
var agentInfo={}
if (bus?.UserInfo?.first_name) {
    var userInfo= bus.UserInfo;
    agentInfo = {
        "firstName": userInfo.first_name,
        "lastName": userInfo.last_name,
        "email": userInfo.email,
        "phoneNumber": userInfo.phone
        // ...bus["OrderMetaInfo"]
    }
}

agentUtils.setUserInfo(agentInfo);
koreDebugger.log('agentInfo : '+JSON.stringify(agentInfo))
context.isSentiment = context.session.BotUserSession?.isFromSentiment || null;
BotUserSession.delete("isFromSentiment");


    }

