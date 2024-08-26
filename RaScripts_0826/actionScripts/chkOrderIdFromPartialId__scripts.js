
    const chkOrderIdFromPartialId = () => {
        resp = context.getOrdersDetails?.response.body.orders
context.orderID = context.entities?.hIvrOrderId || context.entities?.orderIdIvr
if(context.orderID){
    for(i=0;i<resp.length;i++){
      orderId = resp[i].id.toString()
      lastFourOrderId = orderId.slice(-4)
      if(context.orderID == lastFourOrderId){
          context.orderDetails = resp[i]
      }
    }
}

var arr = []
for(i=0;i<resp.length ; i++){
    for(j=0;j<resp[i].line_items.length ; j++){
        let orderDate = resp[i]?.created_at.split("T")[0]
        arr.push({
            "orderDate": orderDate , 
            "productTitle": resp[i]?.line_items[j]?.name,
            "orderId" : resp[i]?.id,
            "LineItemID" : resp[i]?.line_items[j]?.id
        })
    }
}
context.session.BotUserSession['data'] = arr
    }

