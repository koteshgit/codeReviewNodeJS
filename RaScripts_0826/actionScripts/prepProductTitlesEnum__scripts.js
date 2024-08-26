
    const prepProductTitlesEnum = () => {
        var orders = context.getOrdersDetails?.response?.body?.orders
context.titles = []
titles = orders.flatMap(order => order.line_items.map(item => item.name));
var arr = [... new Set(titles)].map(ele => ele.trim())
for(i=0;i<arr.length ; i++){
    context.titles.push({
        name:arr[i],
        val:arr[i],
        syn : [arr[i]]
    })
}

itemId = []
for(i=0;i<orders.length ; i++){
    for(j=0;j<orders[i].line_items.length ; j++){
        itemId.push(orders[i].line_items[j].id+"&"+orders[i].id)
    }
}
context.itemId = convertToEnumObj(itemId) //botFunc
context.displayOrdersCount = 0;
context.itemId.push({
    name: 'Show More',
    val: 'Show More',
    syn: [ 'Show More' ]
})

koreDebugger.log(context.titles)
    }

