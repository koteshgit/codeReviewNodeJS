
    const checkItemRefundEligibity = () => {
        orderStatus=context.getOrderStatus?.response?.body

if(["Cancelled", "Return Requested", "Return Inprogress", "Return Rejected", "Return Declined", "Returned"].includes(orderStatus[context.entities.showTitleMatchItems].status)){
    context.itemEligible=true
}

    }

