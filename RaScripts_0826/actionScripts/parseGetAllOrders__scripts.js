
    const parseGetAllOrders = () => {
        orders=context.getOrdersDetails.response.body.orders
for(i=0;i<orders.length;i++){
    for(j=0;j<orders.line_items;j++){
        obj=context.getAllOrdersTrackingInfo.response.body.find(order=>order.id==orders[i].id).line_items.find(item=>item.id==orders[i].line_items[j].id)
       orders[i].line_items[j]=copyObjectFields(obj,orders[i].line_items[j])
    }
}
context.getOrdersDetails.response.body.orders=orders
    }

