
    const checkOrderIdCapturedByGenAi = () => {
        if (context?.GenerativeAINode?.GenAIPromptFindAnOrder?.text) {
    var text = context.GenerativeAINode.GenAIPromptFindAnOrder.text
    var jsonString = text.replace(/^```json\n/, '').replace(/\n```$/, '');
    var parsedData = JSON.parse(jsonString);
    //if (parsedData.entities.length == 1) {
        var orderId = parsedData.entities[0].Order_ID[0];
        koreDebugger.log("Order id is " + orderId)
        if (orderId != "[null]")
            context.entities.orderId = orderId
    //}
}
    }

