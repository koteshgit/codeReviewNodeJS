
    const CreateAddressPayload = () => {
        var BUS=context.session.BotUserSession;
koreDebugger.log("Form payload" + context.forms?.AddressDetails);

var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
if(eCommercePlatform == "Shopify") {
    context.addAddressPayload=JSON.stringify({
        storeAdminUrl : context.session.BotUserSession.ShopifyAdmin.storeAdminUrl,
        storeAdminToken : context.session.BotUserSession.ShopifyAdmin.storeAdminToken,
        queryParams: {
            customerId: BUS.UserInfo.id
        },
        "address": {
            "addressId": Date.now().toString(),
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
} else if (eCommercePlatform == "SFCC") {
    context.addAddressPayload=JSON.stringify({
        "addressUrl": "https://"+env.shortCode+".api.commercecloud.salesforce.com/customer/shopper-customers/v1/organizations/"+env.organizationId+"/customers/"+BUS.UserInfo.id+"/addresses?siteId="+env.siteId,
        "auth":"Bearer "+BUS.SfccAccessToken?.accessToken,
        "address": {
            "addressId": Date.now().toString(),
            "address1": context.forms?.SFCCAddressDetails.addressLine1,
            "address2": context.forms?.SFCCAddressDetails.state,
            "city": context.forms?.SFCCAddressDetails.city,
            "first_name": BUS.UserInfo.first_name,
            "last_name": BUS.UserInfo.last_name,
            "phone": BUS.UserInfo.phone,
            "zip": context.forms?.SFCCAddressDetails.zipcode,
            "name": BUS.UserInfo.first_name+BUS.UserInfo.last_name,
            // "province":context.forms.AddressDetails?.state,
            "country":context?.forms.SFCCAddressDetails?.countryCode
        }
    });
}



if(context.entities?.hActionDecider=="Add Address"){ //Required in Update profile information dialog
    delete context.entities.hActionDecider
}
koreDebugger.log("Address payload" + context.addAddressPayload);
    }

