
    const resetToIntentedFlow = () => {
        delete context.entities.showAllDeliveryAddresses
delete context.forms?.AddressDetails
delete context.displayAddressCount
delete context.noOfTries
delete context.prefillForms
context.immediateAction=context.entities.hActionDecider

    }

