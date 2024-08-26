txt="Thank you for verifying. Your mobile number has been updated."
if(context.action=="Email"){
    txt="Thank you for verifying. Your email ID has been updated."
}
if(context.action=="Name"){
    txt="I've updated the name to "+ context.forms.UpdateName.firstName+" "+context.forms.UpdateName.lastName
}
print(txt)
