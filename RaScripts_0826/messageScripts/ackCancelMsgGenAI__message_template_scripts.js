max=parseInt(context.multiItemOrder.line_items[0].price)
name=context.multiItemOrder.line_items[0].name
for(i=0;i<context.multiItemOrder.line_items.length;i++){
    if(max<=parseInt(context.multiItemOrder.line_items[i].price)){
        max=parseInt(context.multiItemOrder.line_items[i].price)
        name=context.multiItemOrder.line_items[i].name
    }
}

txt="I see "+context.multiItemOrder.line_items.length+" items in your order which includes "+name+". Do you want to cancel the entire order, or do you have a specific item you would like to cancel?"
print(txt)
