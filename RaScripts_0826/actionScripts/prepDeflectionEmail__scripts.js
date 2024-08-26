
    const prepDeflectionEmail = () => {
        var userInfo = context.session.BotUserSession?.UserInfo;
var deflectionURL = context.getShortUrl.response?.body?.body?.url;
var body = "Dear Shopper,\nThanks for your inquiry! Here's a personalized list of the items you asked about: " + deflectionURL + "\n\n - " + env.displayStoreName

context.smsBody = JSON.stringify({
    "phone" : getANI(),
    "message" : body
});


    }

