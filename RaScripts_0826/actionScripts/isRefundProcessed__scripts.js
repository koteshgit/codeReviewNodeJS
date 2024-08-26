
    const isRefundProcessed = () => {
        var orderStatus=context.getOrderStatus.response.body
let bus = context.session.BotUserSession;
// koreDebugger.log(JSON.stringify(bus))
status=orderStatus[context.entities.displayItems||context.entities.showTitleMatchItems].status
koreDebugger.log(status)
if (status == "Returned" || status == "Cancelled") {
    context.isRefundedPros = true;
} else if (status == "Return Inprogress" || status == "Return Requested") {
    context.notReturnedToSeller = true;
} else if (status == "Return Declined") {
    context.isDeclined = true;
}

    }

