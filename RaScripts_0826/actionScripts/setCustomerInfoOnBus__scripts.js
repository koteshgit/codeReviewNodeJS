
    const setCustomerInfoOnBus = () => {
        var bus = context.session.BotUserSession;
var userInfo;
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
if (eCommercePlatform == "Shopify") {

userInfo = context.getCustomerInfo?.response?.body?.customers[0];
} else if(eCommercePlatform == "SFCC") {
    userInfo = context.updateProfile?.response?.body?.customer;
}
if (userInfo) {
  var formattedUserInfo = {
    "id": userInfo.id,
    "email": userInfo.email,
    "first_name": userInfo.first_name,
    "last_name": userInfo.last_name,
    "phone": userInfo.phone
  };

  bus.UserInfo=formattedUserInfo
}
if(context.entities?.hUpdateProfileOrAddress){
context.entities.hUpdateProfileOrAddress.shift()
if(context.entities.hUpdateProfileOrAddress.length==0){
    context.isEod=true
}else{
 delete context.entities.oneTimePasscode   
 delete context.noOfOTPAttempts
 delete context.isValidOTP
 delete context.forms.UpdatePhoneNo
 delete context.forms.UpdateEmail
 delete context.forms.UpdateName
}
}else{
    context.isEod=true
}
    }

