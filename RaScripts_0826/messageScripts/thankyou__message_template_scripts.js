text = "Please tell me the security code I sent on your email address and mobile number to complete the verification."
if(context.isValidOtpTries == 1){
    text = "The security code you entered didn't match. Please re-check and enter the security code on your keypad."
}

print(text)
