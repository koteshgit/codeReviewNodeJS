
    const prepOtpForPayment = () => {
        context.OTP = getRandomNumber(100000,999999);//botFunc
let firstName = context.session.BotUserSession.UserInfo.first_name;
context.smsBody = JSON.stringify({
      "phone": context.session.BotUserSession.UserInfo.phone,
      "message":  `Your one-time code for payment is ${context.OTP}. Please use this code to complete the payment.

- ${env.displayStoreName}`
    });
    
koreDebugger.log('Payment-SMS-Body : '+JSON.stringify(context.smsBody))
    }

