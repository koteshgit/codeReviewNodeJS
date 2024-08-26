
    const sfccSignUpPayload = () => {
        
const password = context.forms.SignUp.Password;
koreDebugger.log("password "+password)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!passwordRegex.test(password)) {
    koreDebugger.log('Incorrect Password');
    context.prefillForms = {
        "SignUp": {
            "fields": {
                "login": context.forms.SignUp.Email,
                "Email": context.forms.SignUp.Email,
                "Firstname": context.forms.SignUp.Firstname,
                "Lastname": context.forms.SignUp.Lastname,
                "DOB": context.forms.SignUp.DOB,
                "Gender": context.forms.SignUp.Gender,
                "PhoneNumber":context.forms.SignUp.PhoneNumber
            }
        }
    }
    delete context.forms.SignUp;
} else {
    
    context.signUp = JSON.stringify({
        "password": context.forms.SignUp.Password,
        "customer": {
            "login": context.forms.SignUp.Email,
            "email": context.forms.SignUp.Email,
            "firstName": context.forms.SignUp.Firstname,
            "lastName": context.forms.SignUp.Lastname,
            "phoneMobile":context.forms.SignUp.PhoneNumber
        }
    });
    context.username = context.forms.SignUp.Email;
    context.password = context.forms.SignUp.Password;
    const siteId = env.siteId;
    const shortCode = env.shortCode;
    const organizationId = env.organizationId;
    context.signUpUrl = `https://${shortCode}.api.commercecloud.salesforce.com/customer/shopper-customers/v1/organizations/${organizationId}/customers?siteId=${siteId}`;
    delete context.prefillForms
}



// context.signUp = JSON.stringify({
//   "password": context.forms.SignUp.Password,
//   "customer": {
//     "login": context.forms.SignUp.Email,
//     "email": context.forms.SignUp.Email,
//     "firstName": context.forms.SignUp.Firstname,
//     "lastName": context.forms.SignUp.Lastname
//   }
// });

// const siteId = env.siteId;
// const shortCode = env.shortCode;
// const organizationId = env.organizationId;
// context.signUpUrl = `https://${shortCode}.api.commercecloud.salesforce.com/customer/shopper-customers/v1/organizations/${organizationId}/customers?siteId=${siteId}`;
// koreDebugger.log('context.signUp'+context.signUp);
    }

