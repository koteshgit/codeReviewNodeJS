
    const Script0010 = () => {
        var bus = context.session.BotUserSession;
context.userInput = bus.lastMessage?.messagePayload?.message?.body || bus.lastMessage?.messagePayload?.message?.text || bus.lastMessage?.messagePayload?.entry[0]?.messaging[0]?.message?.text
koreDebugger.log("User Input is " + context.userInput)

// context.isGenAiEnabled = false
koreDebugger.log("Env GenAIIVR is " + env.isIVRGenAIEnabled)
context.isIVRGenAIEnabled = env.isIVRGenAIEnabled
koreDebugger.log("context isIVRGenAIEnabled is " + context.isIVRGenAIEnabled)

// const formattedUserInfo = {
//     "id": "11111",
//     "email": "niranjan.anugu@kore.com",
//     "first_name": "Niranjan",
//     "last_name": "Reddy",
//     "phone": "+918688387213"
//   };

//   BotUserSession.put("UserInfo", formattedUserInfo);
    }

