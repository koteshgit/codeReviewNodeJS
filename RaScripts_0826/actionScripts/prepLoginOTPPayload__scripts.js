
    const prepLoginOTPPayload = () => {
        let firstName = context.validatePhoneNo.response.body?.customers[0]?.first_name;
context.OTP = (Math.random() * 9000 + 1000) | 0;
    payload = {
      "phone": context.entities.phoneNumber,
      "message":  `Hi ${firstName}, your one-time code for secure login is ${context.OTP}. Please use this code within the next 5 minutes. Keep it confidential and do not share it with anyone.
- ${env.displayStoreName}`
    };
    context.smsBody = JSON.stringify(payload);

    }

