
    const parsingGenAiDetails = () => {
        var genAiResp = context?.AI_Assisted_Dialogs?.genainodefindanorder?.entities[0]

if(genAiResp?.LineItemID && genAiResp?.Order_ID){
    context.orderId = genAiResp?.Order_ID;
    context.lineItemId = genAiResp?.LineItemID
    context.ItemName = genAiResp?.Product_Title
    context.orderDate = genAiResp?.Date
}

    }

