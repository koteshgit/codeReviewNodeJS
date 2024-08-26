
    const composeWBData = () => {
        //The below code will work when we use work bench ready to integrate. 
if(context.intentName === "Cancel_an_order"){
        context.cancelOrder = {
      "CurrFlow": { "enable": true, "FLWUP": {} },
      "CusMsg": { "enable": false, "FLWUP": {} },
      "AT": { "enable": false },
      "CusFlow": { "enable": false }
    }
}
else if(context.intentName === "Refund_Status"){
        context.refundStatus = {
      "CurrFlow": { "enable": true, "FLWUP": {} },
      "CusMsg": { "enable": false, "FLWUP": {} },
      "AT": { "enable": false },
      "CusFlow": { "enable": false }
    }
}

// else if(context.intentName === "Return_Order"){
//         context.exchangeOrder = {
//       "CurrFlow": { "enable": true, "FLWUP": {} },
//       "CusMsg": { "enable": false, "FLWUP": {} },
//       "AT": { "enable": false },
//       "CusFlow": { "enable": false }
//     },
//     context.returnOrder = {
//       "CurrFlow": { "enable": true, "FLWUP": {} },
//       "CusMsg": { "enable": false, "FLWUP": {} },
//       "AT": { "enable": false },
//       "CusFlow": { "enable": false }
//     }
// }
//koreDebugger.log()

//koreDebugger.log("Platform is " + JSON.parse(env.commercePlatformConfig).platformName)
context.eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
    }

