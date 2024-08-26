
    const validateOTP = () => {
        
context.isValidOTP = context.entities.OTP == context.OTP;
context.noOfOTPAttempts = (context?.noOfOTPAttempts || 0) + 1;

if(context.isValidOTP){
    var bus = context.session.BotUserSession;
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
}else{
    delete context.entities.OTP;
}
    }

