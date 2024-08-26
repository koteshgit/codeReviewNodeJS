
    const isValidOTP = () => {
        if(context.entities.oneTimePasscode == context.OTP){
    context.isValidOTP=true;
}else{
    delete context.entities.oneTimePasscode;
    context.noOfOTPAttempts = (context?.noOfOTPAttempts || 0) + 1;
}
    }

