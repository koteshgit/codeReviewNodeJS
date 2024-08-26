
    const checkValidOrderId = () => {
        orderId = context.entities.hIvrOrderId.toString()
context.isValidOrderId = true
if(orderId.length != 4){
    delete context.entities.hIvrOrderId
    context.isValidOrderId = false
}

    }

