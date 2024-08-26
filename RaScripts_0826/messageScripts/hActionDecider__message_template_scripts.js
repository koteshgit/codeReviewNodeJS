orders=context.orderStatus
txt=""
if(context.entities.mutipleProductsFound&&context.entities.mutipleProductsFound!="All"){
    context.lineItemsIds=context.lineItemsIds.slice(parseInt(context.entities.mutipleProductsFound),parseInt(context.entities.mutipleProductsFound)+1)
}
for(i=0;i<orders.length;i++){
    for(j=0;j<orders[i].result.length;j++){
        if(orders[i].result[j].id.includes(context.lineItemsIds)){
            name=orders[i].result[j]?.name
            status = orders[i].result[j]?.status;
	if (status == "Returned" || status == "Cancelled") {
		txt = txt + "The refund status of the product " + name + " has already been processed to your account ending with 5 6 7 9\n";
	} else if (status == "Return Inprogress" || status == "Return Requested") {
		txt = txt + "The refund status of the product " + name + "  has not reached us. Your refund will be processed once we receive the item.\n";
	} else if (status == "Return Declined") {
		var mentionReason = ""
		switch (order.result[i]?.returnRejectedReason) {
			case "RETURN_PERIOD_ENDED":
				var mentionReason = "you'r return period has ended"
				break;
			case "FINAL_SALE":
				var mentionReason = "you have returned final sale item"
				break;
			default:
				var mentionReason = order.result[i].returnRejectedReason
		}

		txt = txt + "The refund status of the product " + name + "  is that we have received your item. However, I want to inform you that upon inspection, we noticed that the " + mentionReason + " Hence, we are unable to issue a refund for it.\n";
	} else {
		txt = txt + "You can expect to receive your refund for product " + name + " within 2-3 business days. If you haven't received it by then, feel free to reach out to us."
	}
        }
    }
}
print(txt)

