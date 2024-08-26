
    const returnEligibleItems = () => {
        orderStatus=context.getOrderStatus.response.body
context.displayItems = [];
if (Object.keys(orderStatus).filter(key => ["Delivered"].includes(orderStatus[key].status)).length > 0) {
  context.displayItems = Object.keys(orderStatus).filter(key => ["Delivered"].includes(orderStatus[key].status));
}
context.itemIds=convertToEnumObj(context.displayItems)

koreDebugger.log(context.displayItems)
context.skuImages={}
imageInfo=context.getProductId.response?.body?.data?.products?.edges
skus=JSON.parse(context.skuQuery)
skus=skus.skus
for(i=0;i<imageInfo.length;i++){
    context.skuImages[skus[i]]=imageInfo[i]?.node?.images?.edges[0]?.node?.src
}


    }

