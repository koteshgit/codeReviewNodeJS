
    const prepOtpPayload = () => {
        context.OTP = getRandomNumber(1000,9999);//botFunc
let firstName = context.session.BotUserSession.UserInfo.first_name
if(context.action=="Phone Number"){
    payload = {
      "phone": context.forms.UpdatePhoneNo.phone,
      "message":  `Hi ${firstName}, your one-time code for updating the mobile number is ${context.OTP}. Please use this code within the next 5 minutes to complete the process. If you did not initiate this change, kindly reach out to us immediately.
      
      - ${env.displayStoreName}`
    };
    context.otpBody = JSON.stringify(payload);
context.notificationUrl=env.SMTHost+"/sendSMS"
koreDebugger.log(context.smsBody)
}else{
    emailBody={
      "content": `Hi ${firstName}, your one-time code for updating the email is ${context.OTP}. Please use this code within the next 5 minutes to complete the process. If you did not initiate this change, kindly reach out to us immediately.
      
      - ${env.displayStoreName}`,
      "to": context.forms.UpdateEmail.email,
      "subject": `Retail Assist: One-time code for Authentication`
    }
    context.otpBody = JSON.stringify(emailBody);
context.notificationUrl=env.SMTHost+"/sendEmail"
koreDebugger.log("Type : "+context.forms.UpdateEmail.email)
}
    }

