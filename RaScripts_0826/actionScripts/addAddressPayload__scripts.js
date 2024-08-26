
    const addAddressPayload = () => {
        var BUS=context.session.BotUserSession
context.addAddressPayload=JSON.stringify({
    "address": {
        "address1": context.forms?.AddressDetails.addressLine1,
        "address2": context.forms?.AddressDetails.state,
        "city": context.forms?.AddressDetails.city,
        "first_name": BUS.UserInfo.first_name,
        "last_name": BUS.UserInfo.last_name,
        "phone": BUS.UserInfo.phone,
        "zip": context.forms?.AddressDetails.zipcode,
        "name": BUS.UserInfo.first_name+BUS.UserInfo.last_name,
        // "province":context.forms.AddressDetails?.state,
        "country":context?.forms.AddressDetails?.country
    }
});
if(context.entities?.hActionDecider=="Add Address"){ //Required in Update profile information dialog
    delete context.entities.hActionDecider
}
koreDebugger.log(context.addAddressPayload)
    }

