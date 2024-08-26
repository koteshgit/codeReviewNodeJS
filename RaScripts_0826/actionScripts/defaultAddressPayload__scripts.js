
    const defaultAddressPayload = () => {
        var BUS=context.session.BotUserSession
var addressId=context.entities?.displayAddress||context.entities.showAllDeliveryAddresses
context.updateAddressPayload=JSON.stringify({
    "address": {
        "default":true
    },
    "customerId": BUS.UserInfo.id,
    "addressId": addressId
})

koreDebugger.log(addressId)

koreDebugger.log(context.updateAddressPayload)
    }

