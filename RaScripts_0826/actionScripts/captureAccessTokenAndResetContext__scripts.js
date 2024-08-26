
    const captureAccessTokenAndResetContext = () => {
        var bus = context.session.UserSession.callerId
var bus = context.session.BotUserSession
context.userId = getUserId()
if(context.isAudioCodes){
    bus.phnNumber = context.session.UserSession.Caller
    bus.callerId = context.session.UserSession.callerId
}
var cd = context.session.UserContext;
koreDebugger.log("BUS: "+JSON.stringify(cd))
// if(context.session.BotUserSession?.UserInfo?.id){
//     context.session.BotUserSession.UserInfo = undefined;
// }
    }

