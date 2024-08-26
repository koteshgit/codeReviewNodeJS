
    const deleteAndPrefillZip = () => {
        context.prefillForms = {
    "AddressDetails": {
        "fields": {
            "addressLine1": context?.forms.AddressDetails.addressLine1,
            "city": context?.forms.AddressDetails.city,
            "state":context?.forms.AddressDetails.state,
            "country": context?.forms.AddressDetails.country,
        }
    }
}
context.noOfTries = (context?.noOfTries || 0) + 1;
delete context.forms.AddressDetails
    }

