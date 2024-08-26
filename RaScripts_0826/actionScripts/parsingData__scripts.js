
    const parsingData = () => {
        var identifiedIntent = context.intentIdentifier.response.body?.choices[0]?.message?.content
identifiedIntent = identifiedIntent.match(/\d+/)

var intentNumber = parseInt(identifiedIntent)
var mPromptIdentifiedIntentVsActualDialogName = {
    "1":"Search and Order a Product",
    "2":"View Cart",
    "3":"View Cart",
    "4":"Find an Order",
    "5":"Cancel an Order",
    "6":"Exchange or Return an Order",
    "7":"Get Return, Exchange or Refund Status",
    "8":"Store Locator",
    "9":"Document Search",
    "10":"View Profile Information",
    "11":"Update Profile Information",
    "12":"Sign Up",
    "13":"Log In",
    "14":"Agent Transfer",
    "15":"Search and Order a Product"
}

context.identifiedIntent = mPromptIdentifiedIntentVsActualDialogName[intentNumber];
koreDebugger.log("Open ai response"+identifiedIntent+ " Identified Intent : " +intentNumber +", MappedTo : "+mPromptIdentifiedIntentVsActualDialogName[intentNumber])
context.intentIdentifier.response.statusCode=200
    }

