// if(context.productDetails.itemTitle.split(" ").length<=4){
// txt="You will receive {{context.orderPayload.order.line_items[0].title}} by *"+getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000))+"*"
// }else{
// title=context.productDetails.itemTitle.split(" ")
// txt="You will receive "+title[0]+" "+title[1]+" "+title[title.length-2]+" "+title[title.length-1]+" by *"+getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000))+"*"
// }

txt = "Your order is expected to be delivered by *"+getFormattedDate(new Date((new Date()).getTime() + 5 * 24 * 60 * 60 * 1000))+"*."
print(txt)
