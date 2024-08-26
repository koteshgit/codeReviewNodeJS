
    const parseSelectedItems = () => {
        var bus = context.session.BotUserSession
var msg=bus?.lastMessage?.messagePayload?.message?.body||bus?.lastMessage?.messagePayload?.message?.text
try{
if(JSON.parse(msg)){
    context.selectedItems=msg
}
    
}catch(e){
}
    }

