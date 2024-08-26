
    const setUserInfoOnBus = () => {
        const bus = context.session.BotUserSession;
const userInfo = context.validateUserName?.response?.body?.customers[0] || undefined;
const userSignupId = context.createAccount?.response?.body?.customer?.id || undefined

if (userInfo || userSignupId ) {
  const formattedUserInfo = {
    "id": userInfo?.id || userSignupId,
    "email": userInfo?.email || context.forms?.SignUp?.Email,
    "first_name": userInfo?.first_name || context.forms?.SignUp?.Firstname,
    "last_name": userInfo?.last_name || context.forms?.SignUp?.Lastname,
    "phone": userInfo?.phone ||  context.forms?.SignUp?.PhoneNumber
  };

  BotUserSession.put("UserInfo", formattedUserInfo);
}
    }

