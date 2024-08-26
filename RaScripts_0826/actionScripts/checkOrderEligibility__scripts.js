
    const checkOrderEligibility = () => {
        if(context.getOrderStatus.response.body[context.entities.showTitleMatchItems].status=="Delivered"){
    context.isDelivered=true
}
koreDebugger.log(context.getOrderStatus.response.body[context.entities.showTitleMatchItems].status)
    }

