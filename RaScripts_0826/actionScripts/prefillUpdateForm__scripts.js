
    const prefillUpdateForm = () => {
        if(context.entities.showAllDeliveryAddresses){
    var info=context.fetchDeliveryAddressDetails?.response?.body?.addresses.find(address => (address.id === parseInt(context.entities.showAllDeliveryAddresses)) || 
    address.id === context.entities.showAllDeliveryAddresses)
}
else{
    var info = context.fetchDeliveryAddressDetails.response.body.addresses[0];
    
}
koreDebugger.log('info'+info);
context.prefillForms = {
    "AddressDetails": {
        "fields": {
            "addressLine1": info?.address1,
            // "addressLine2": info?.address2,
            "city": info?.city,
            "state":info?.address2,
            "country": info?.country,
            "zipcode":info?.zip
        }
    }
}
    }

