var txt="Your address has been updated."
switch(context.immediateAction) {
  case "Delete Address":
       txt="I have removed this address from your profile."
    break;
  case "Modify Address":
      txt="Your address has been updated."
    break;
  case "Add Address":
    txt="This address has been added to your profile."
    break;
}
print(txt)
