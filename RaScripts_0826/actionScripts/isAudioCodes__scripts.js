
    const isAudioCodes = () => {
        if(isAudioCodeChannel()){
    context.isAudioCodes=true
}
var bus = context.session.BotUserSession
context.userInput = bus.lastMessage?.messagePayload?.message?.body || bus.lastMessage?.messagePayload?.message?.text || bus.lastMessage?.messagePayload?.entry[0]?.messaging[0]?.message?.text;

    }

