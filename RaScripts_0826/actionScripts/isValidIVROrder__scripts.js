
    const isValidIVROrder = () => {
        orderId=context.entities.hIvrOrderId||context.entities.ivrOrderId
const regex = /^\d{4}$/
koreDebugger.log(orderId.length)
if(orderId.toString().length==4){
    context.isValidOrder=true
}else{
    delete context.entities.hIvrOrderId
    delete context.entities.ivrOrderId
    delete context.isValidOrder
}
context.noOfattempts=(context.noOfattempts||0)+1
    }

