
    const sfccSetUserInfoOnBus = () => {
        const bus = context.session.BotUserSession;
const userInfo = context?.sfccCreateAccount?.response?.body||context.sfccGetProfileInfo?.response?.body;
koreDebugger.log('userInfo'+JSON.stringify(userInfo));
if (userInfo) {
  const formattedUserInfo = {
    "id": userInfo?.customerId||userInfo?.customer_id,
    "email": userInfo?.email,
    "first_name": userInfo?.firstName||userInfo?.given_name,
    "last_name": userInfo?.lastName||userInfo?.family_name,
    "phone":  userInfo?.phoneMobile || userInfo?.phone || userInfo?.phoneMobile ||  context.forms?.sfccSignUp?.PhoneNumber
  };
  BotUserSession.put("UserInfo", formattedUserInfo);

}
const SfccAccessToken = {
    "accessToken":context.getSFCCAccessToken.response.body?.access_token
 }

BotUserSession.put("SfccAccessToken", SfccAccessToken);
    }

