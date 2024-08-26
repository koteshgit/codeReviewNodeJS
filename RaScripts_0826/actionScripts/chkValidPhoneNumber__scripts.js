
    const chkValidPhoneNumber = () => {
        context.phoneNumber = validatePhone(context.entities.registerMobileNum)
if(context.phoneNumber.length < 10 || context.phoneNumber.length>13){
   context.isValidPhoneNumber+=1
    delete context.entities.registerMobileNum
}

else if(context.isValidPhoneNumber > 1){
    context.isAgentReq = true
}
else{
    context.isValidPhoneNumber = true
}
koreDebugger.log("Phone Number entered is " + context.phoneNumber)
    }

