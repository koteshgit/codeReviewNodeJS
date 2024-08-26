
    const prepProductNameEnums = () => {
        names=[]
for(i=0;i<context.multiItemOrder.line_items.length;i++){
    names.push(context.multiItemOrder.line_items[i].name)
}
context.productNames=convertToEnumObj(names)
    }

