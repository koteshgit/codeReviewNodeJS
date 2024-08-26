
 text = "I couldn't find any orders on the number you're calling from. Please tell me 10-digit mobile number you used while placing the order."

if(context.isNumberNotFoundInDb == 1){
    text = "I couldn't find that number in our records. Please tell me your number again."
}
if(context.isValidPhoneNumber == 1){
    text = "The number you provided doesn't seem correct. Can you please enter your 10 digit mobile number on the keypad?"
}

print(text)
