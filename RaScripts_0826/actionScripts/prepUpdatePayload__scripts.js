
    const prepUpdatePayload = () => {
        bus=context.session.BotUserSession.UserInfo
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName

if (eCommercePlatform == "Shopify") {
if(context?.action=="Email"||context.entities.showProfileInfo=="Email"){
  context.updateProfilePayload=JSON.stringify({
    "customer": {
        "id": bus.id,
        "email": context.forms.UpdateEmail.email
    }
})
}  
else{
context.updateProfilePayload=JSON.stringify({
    "customer": {
        "id": bus.id,
        "phone": context.forms.UpdatePhoneNo.phone
    }
})
}
}
    }

