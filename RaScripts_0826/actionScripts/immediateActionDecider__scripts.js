
    const immediateActionDecider = () => {
        var bus=context.session.BotUserSession
var msg=bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text

if(msg.match(/\bdelete\b/gi)){
    context.immediateAction="Delete Address"
}
if(msg.match(/\bupdate\b/gi)){
    context.immediateAction="Modify Address"
}
if(msg.match(/\badd\b/gi)){
    context.immediateAction="Add Address"
}
if(msg.match(/\bdefault\b/gi)){
    context.immediateAction="Default"
}

koreDebugger.log("ImmediateAction : "+context.immediateAction)
    }

