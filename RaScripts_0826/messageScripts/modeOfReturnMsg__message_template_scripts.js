txt="Great. I'm sending you a return code with instructions. You should see it in your email soon."
if(context.entities.modeOfReturn=="Return by Mail"){
    txt="Great. I'm sending you a shipping label with instructions. You should see it in your email soon."
}
print(txt)
