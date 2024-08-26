txt = content.SOP_invalidZipCodeMsg

if(context?.noOfTries){
    txt = content.SOP_retryInvalidZipCodeMsg
}
print(txt)
