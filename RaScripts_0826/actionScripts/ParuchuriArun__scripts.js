
    const ParuchuriArun = () => {
        var BUS=context.session.BotUserSession
var addressId=context.entities.showAllDeliveryAddresses||context.fetchDeliveryAddressDetails?.response?.body?.addresses[0]?.id;
koreDebugger.log("addressId"+addressId)
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
if(eCommercePlatform == "Shopify") {
context.updateAddressPayload=JSON.stringify({
    "address": {
        "country": context?.forms?.AddressDetails?.country,
        "zip": context?.forms?.AddressDetails?.zipcode,
        "city": context?.forms?.AddressDetails?.city,
        "address1": context?.forms?.AddressDetails?.addressLine1,
        "address2": context?.forms?.AddressDetails?.state,
        //"provison": context?.forms?.AddressDetails?.state,
        "first_name": BUS.UserInfo.first_name,
        "last_name": BUS.UserInfo.last_name,
        "phone": BUS.UserInfo.phone,
    },
    "customerId": BUS.UserInfo.id,
    "addressId": addressId
});
}else if(eCommercePlatform == "SFCC"){
    context.updateAddressPayload=JSON.stringify({
        "addressUrl": "https://"+env.shortCode+".api.commercecloud.salesforce.com/customer/shopper-customers/v1/organizations/"+env.organizationId+"/customers/"+BUS.UserInfo.id+"/addresses/"+addressId+"?siteId="+env.siteId,
        "auth":"Bearer "+BUS.SfccAccessToken?.accessToken,
        "address": {
        "addressId": addressId,
        "address1": context?.forms?.AddressDetails?.addressLine1,
        "city": context?.forms?.AddressDetails?.city,
        "stateCode": context?.forms?.AddressDetails?.state,
        "countryCode": context?.forms?.AddressDetails?.country,
        "postalCode": (context?.forms?.AddressDetails?.zipcode).toString(),
        "lastName":BUS.UserInfo.last_name
        }
    })
}

if(context.entities?.hActionDecider=="Modify Address"){
    delete context.entities.hActionDecider
}
koreDebugger.log(JSON.stringify(context.updateAddressPayload))
    }

