txt="I found "+context?.lineItemsIds.length
orders=context.orderStatus
for (i = 0; i < orders.length; i++) {
  for (j = 0; j < orders[i].result.length; j++) {
    if (context.lineItemsIds.includes(orders[i].result[j].id)) {
      txt = txt + "Return Request raised for " + orders[i].result[j].name + " ordered on " + getFormattedDate(orders[i].created_at) + "\n";
    }
  }
}
txt=txt +"\n Please specify the order you're inquiring about."
print(txt)
