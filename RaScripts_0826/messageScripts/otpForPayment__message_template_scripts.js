title = `Enter the one-time code sent to ${maskMobileNumber(context.session.BotUserSession.UserInfo.phone)}`;
if(context.noOfOTPAttempts){
    title="I have sent a new code to your mobile number. Please enter it here"
}
// var message = {
//     "type": "template",
//     "payload": {
//         "template_type": "otpValidationTemplate",
//         "title": title,
//         "sliderView": true,
//         "description": "Please Enter your 6 digit OTP below",
//         // "mobileNumber": "+91******8161",
//         // "piiReductionChar": '#', // Special charater that is used for PII Redaction
//         "pinLength": 6,// Specifies the length of the PIN, it should be minimun 4
//         "otpButtons": [
//             {
//                 title: "Verify One-Time-Code",
//                 type: "submit"
//             },
//             {
//                 title: "Cancel",
//                 type: "resend",
//                 payload : "cancel"
//             }
//         ]
//     }
// };
    // message.payload["mobileNumber"] = maskMobileNumber(context.session.BotUserSession.UserInfo.phone)
// print(JSON.stringify(message));

print(title);
