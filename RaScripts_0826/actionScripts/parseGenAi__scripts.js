
    const parseGenAi = () => {
        var genAiResp = context?.AI_Assisted_Dialogs?.genainodecancelorder?.entities[0]
// koreDebugger.log(genAiResp)
if(genAiResp?.LineItemID && genAiResp?.Order_ID){
    context.caluculatedOrder = JSON.stringify({
         "orderId" : genAiResp?.Order_ID
    })
    context.lineItemId = genAiResp?.LineItemID
    context.ItemName = genAiResp?.Product_Title
}


koreDebugger.log(context.caluculatedOrder)
    }

