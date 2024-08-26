orderId = context.entities.ivrOrderId || context.entities.hIvrOrderId;
var order = context.orderStatus;
if (orderId) {
	order = order.find(order => order.id % 10000 == parseInt(orderId));
	if(context.entities?.multipleItemsOrder!="all"){
	    cnt=parseInt(context.entities.multipleItemsOrder)
	    order.result=order.result.slice(cnt-1,cnt)
	}
} else {
	order = order.find(order => order.id == context.orderStatus[0].id);
}
txt = "";
for (let i = 0; i < order.result.length; i++) {
	name = order.result[i].name;
	status = order.result[i].status;
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

print(txt);



// Cancelled
// "Return Rejected",
//     "OPEN": "Return Inprogress",
//     "REQUESTED": "Return Requested",
//     "CLOSED": "Returned",
//     "DECLINED": "Return Declined"
//     Return Rejected
