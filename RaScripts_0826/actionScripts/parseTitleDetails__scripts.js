
    const parseTitleDetails = () => {
        orderDetails = context.getOrdersDetails.response.body.orders
orderList = []
noOfOrder = []
cnt = 1
if(context.entities.titleName){
    for(i=0;i<orderDetails.length ; i++){
        for(j=0 ;j<orderDetails[i].line_items.length ;j++){
            lineItem = orderDetails[i].line_items[j]
            if(context.entities.titleName.includes(lineItem.name)){
                lineItem["orderDate"] = orderDetails[i].created_at.split("T")[0] // we are storing only order Id and order Date since because we have title
                lineItem["orderId"] = orderDetails[i].id
                orderList.push(lineItem)
                noOfOrder.push({
                    "name":cnt,
                    "val":cnt,
                    "syn":cnt
                })
                cnt+=1
            }
        }
    }
    context.orderDetails = orderList
    context.noOfOrder = noOfOrder
    koreDebugger.log(context.orderDetails)
}


var orderDetails = context.orderDetails
context.cnfProductNodeTxt = "I see your order for "+orderDetails[0].name+", placed on "+orderDetails[0].orderDate.split("T")[0]+".Would you like an update on the status of this particular order?"

    }

