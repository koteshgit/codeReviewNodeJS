
    const Script0019 = () => {
        var orderData = context.getOrdersDetails.response?.body?.orders
arr = []
for(i=0;i<orderData.length;i++){
    arr.push(orderData[i].id)
}

context.orderIdsPayload=JSON.stringify({
    "orderIds": arr
})
    }

