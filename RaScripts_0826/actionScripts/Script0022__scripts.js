
    const Script0022 = () => {
        koreDebugger.log("context.userInput is " +  context.userInput);

var bus = context.session.BotUserSession;
// Overrisding last message with stored/desired userInput
bus.lastMessage.messagePayload.message.body = context.userInput;
bus.lastMessage.messagePayload.message.text = context.userInput;
// bus.lastMessage?.messagePayload?.entry[0]?.messaging[0]?.message?.text
koreDebugger.log("bus.lastMessage.messagePayload.message.body " +  bus.lastMessage.messagePayload.message.body);

//Present Date --==
context.date = new Date()
    }

