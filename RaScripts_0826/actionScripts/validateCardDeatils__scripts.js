
    const validateCardDeatils = () => {
        if(context.forms.PaymentCard.cardNumber!=4242424242424242){
    context.prefillForms = {
    "PaymentCard": {
        "fields": {
            "name": context?.forms.PaymentCard.name,
            "expiryDate": context?.forms.PaymentCard.expiryDate,
            "cvv": context?.forms.PaymentCard.cvv,
            "zip": context?.forms.PaymentCard.zip,
        }
    }
}
delete context.forms.PaymentCard
}else{
    delete context.prefillForms
}
    }

