
    const isValidAddressToDelete = () => {
        var addressId=parseInt(context.entities.showAllDeliveryAddresses||context.fetchDeliveryAddressDetails?.response?.body?.addresses[0]?.id);
context.eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName;
if(context.eCommercePlatform === "Shopify") {
if(context.fetchDeliveryAddressDetails?.response?.body?.addresses.find(address => address.id === addressId).default==true){
    context.isValidDeleteAddress=false
}
}
    }

