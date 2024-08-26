
    const parseProductNames = () => {
        orders = context.orderStatus;
    context.lineItemsIds = [];
k=1
number=[]
    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < orders[i].result.length; j++) {
            if (context.entities.productNameAndOrderIds.includes(orders[i].result[j].name)) {
                context.lineItemsIds.push(orders[i].result[j].id);
                number.push(k.toString())
                k++
            }
        }
    }
    context.number=convertToEnumObj(number)
context.number.push({
    name: 'All',
    val: 'All',
    syn: [ "All" ]
})


    }

