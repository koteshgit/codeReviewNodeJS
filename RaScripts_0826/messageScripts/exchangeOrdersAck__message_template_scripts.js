txt="Please select the order you wish to exchange"
if(context?.getOrdersDetails?.response?.body?.orders.length){
    txt="Please choose the order you'd like to exchange."
}
print(txt)
