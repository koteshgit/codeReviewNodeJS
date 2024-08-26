
    const confirmOTP = () => {
        var otp = context.entities.captureOtp;
otp=parseInt(otp);
var bus = context.session.BotUserSession;
if(context.OTP != otp ){
    context.isValidOtpTries+=1
    delete context.entities.captureOtp
    
}
else{
    context.isValidOtpTries = 0
    context.isLoggedIn=true
    var userInfo = context.validatePhoneNo.response?.body?.customers[0] || undefined;
    if (userInfo) {
      const formattedUserInfo = {
        "id": userInfo.id,
        "email": userInfo.email,
        "first_name": userInfo.first_name,
        "last_name": userInfo.last_name,
        "phone": userInfo.phone
      };
      BotUserSession.put("UserInfo", formattedUserInfo);
    }
}

koreDebugger.log(userInfo)
    }

