
    const prepUpdateName = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
koreDebugger.log("Print " + eCommercePlatform)

bus=context.session.BotUserSession.UserInfo
if (eCommercePlatform == "Shopify") {
context.updateProfilePayload=JSON.stringify({
    "customer": {
        "id": bus.id,
        "first_name": context.forms.UpdateName.firstName,
        "last_name": context.forms.UpdateName.lastName
    }
})
koreDebugger.log(context.updateProfilePayload)
} else if (eCommercePlatform == "SFCC") {
    context.updateProfilePayload=JSON.stringify({
        auth:"Bearer "+context.session.BotUserSession.SfccAccessToken.accessToken,
        updatecustomerurl:"https://"+env.shortCode+".api.commercecloud.salesforce.com/customer/shopper-customers/v1/organizations/"+env.organizationId+"/customers/"+bus.id+"?siteId="+env.siteId,
        "customer": {
        "firstName": context.forms.UpdateName.firstName,
        "lastName": context.forms.UpdateName.lastName
        }
})
}
koreDebugger.log(context.updateProfilePayload)
    }

