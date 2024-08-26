
    const cnstrtSignUpPayload = () => {
        context.signUp = JSON.stringify({
    "customer": {
        "first_name": context.forms.SignUp.Firstname,
        "last_name": context.forms.SignUp.Lastname,
        "email": context.forms.SignUp.Email,
        "phone": context.forms.SignUp.PhoneNumber,
        "verified_email": true,
        "password": context.forms.SignUp.Password,
        "password_confirmation": context.forms.SignUp.Password,
        "send_email_welcome": true
    }
})
    }

