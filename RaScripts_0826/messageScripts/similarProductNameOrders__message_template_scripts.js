txt="I found "+context.lineItemId.length
orders=context.getCancelableItems.response.body.eligibleOrders
cnt = 0
for(i=0;i<orders.length;i++){
    for(j=0;j<orders[i].line_items.length;j++){
        if(context.lineItemId.includes(orders[i].line_items[j].id)){
            txt=txt+","+(cnt+1)+" "+orders[i].line_items[j].name+" Placed on "+orders[i].created_at.split("T")[0]+" "
            cnt++
        }
    }
}
txt=txt+" Which item do you want to cancel?"
print(txt)
