orders=context.orderStatus
        for(i=0;i<orders.length;i++){
            item=orders[i].result.find(item=>item.id==parseInt(context.lineItemsIds[0]))
            if(item){
                if(item.status=="Cancelled"){
                    txt="I see the cancelation request you raised for I "+orders[i].result.find(item=>item.id==parseInt(context.lineItemsIds[0])).name+", on "+getFormattedDate(orders[i].created_at)+". I Would you like an update on I the status of this particular order?" 
                }else{
                    txt="I see the return request you raised for I "+orders[i].result.find(item=>item.id==parseInt(context.lineItemsIds[0])).name+", on "+getFormattedDate(orders[i].created_at)+". I Would you like an update on I the status of this particular order?" 
                }
            }
        }
print(txt)
