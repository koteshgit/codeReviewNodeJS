
    const setInfoToBus = () => {
        var bus = context.session.BotUserSession;
var userInfo = context.validatePhoneNo.response?.body?.customers[0];
if (userInfo) {
     const formattedUserInfo = {
        "id": userInfo.id,
        "email": userInfo.email,
        "first_name": userInfo.first_name,
        "last_name": userInfo.last_name,
        "phone": userInfo.phone
      };
      BotUserSession.put("UserInfo", formattedUserInfo);
      koreDebugger.log("Setting UserInfo"+bus.UserInfo);
}



    }

