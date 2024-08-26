// title = "what's the one-time code";
// var message = {
//     "type": "template",
//     "payload": {
//         "template_type": "otpValidationTemplate",
//         "title": title,
//         "sliderView": true,
//         "description": "Please Enter your 4 digit OTP below",
//         // "mobileNumber": "+91******8161",
//         // "piiReductionChar": '#', // Special charater that is used for PII Redaction
//         "pinLength": 4,// Specifies the length of the PIN, it should be minimun 4
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
//     message.payload["mobileNumber"] = maskMobileNumber(context.entities?.phoneNumber)
// print(JSON.stringify(message));

print("What's the one-time code?");
