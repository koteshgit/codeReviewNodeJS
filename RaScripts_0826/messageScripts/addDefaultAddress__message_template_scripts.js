txt="Got it. This is the default address on your profile. To delete this address, please add another address as the default first."
if(context.fetchDeliveryAddressDetails?.response?.body?.addresses.length>1){
    txt="You cannot delete this address because it is set as the default one on your profile. To delete this address please set another address as default first"
}
print(txt)
