// txt="And what's your password?"
// if(context?.noOfUserLogInAttempts==1){
//     txt="What's your password?"
// }
// print(txt)

text = "And what's your password?"
if(context?.noOfUserLogInAttempts==1) {
    text="What's your password?"
}

var message = {
"text" : text,
"masking" : true
};
print(JSON.stringify(message));
