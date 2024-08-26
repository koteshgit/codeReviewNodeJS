
    const prepSmsAndEmailPayload = () => {
        context.OTP = (Math.random() * 9000 + 1000) | 0;
var customerData = context.validatePhoneNo.response.body.customers[0]
context.smsBody = JSON.stringify({
    "phone" : context.phoneNumber,
    "message" : "Hi! Your one-time code for verification is: "+context.OTP+"\n-"+env.shopifyStoreName
})

context.emailBody = JSON.stringify({
    "content":"<?xml version='1.0' encoding='utf-8'><head><meta charset=\"UTF-8\"><body>Dear Customer,<p>Your one-time code for verification is:<b>"+context.OTP+"</b>, Please use this code to complete your login.</p><p>Thank you,<br><b>"+env.shopifyStoreName+"</b></p></body></html>",
    "to": customerData.email,
    "subject": "Shopify - One time code for verification"
})

    }

