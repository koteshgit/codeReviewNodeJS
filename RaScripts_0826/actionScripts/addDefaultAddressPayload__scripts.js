
    const addDefaultAddressPayload = () => {
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
        "country":context?.forms.AddressDetails?.country,
        "default": true
    }
});
    }

