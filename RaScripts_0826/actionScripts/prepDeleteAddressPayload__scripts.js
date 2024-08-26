
    const prepDeleteAddressPayload = () => {
        var BUS=context.session.BotUserSession
var addressId=context?.entities?.showAllDeliveryAddresses||context.fetchDeliveryAddressDetails?.response?.body?.addresses[0]?.id
context.deleteAddressPayload={
    "customerId": BUS.UserInfo.id,
    "addressId": addressId
}
if(context.entities?.hActionDecider=="Delete Address"){
    delete context.entities.hActionDecider
}
    }

