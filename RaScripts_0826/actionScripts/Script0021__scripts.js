
    const Script0021 = () => {
        var bus = context.session.BotUserSession;
bus.lastMessage.messagePayload.message.body  = context.userInput
bus.lastMessage.messagePayload.message.text  = context.userInput
context.session.BotUserSession = bus
// bus.lastMessage.messagePayload.entry[0].messaging[0].message.text  = context.userInput
koreDebugger.log("UserInput "+context.session.BotUserSession.lastMessage.messagePayload.message.body)

//Present Date --==
context.date = new Date()
    }

