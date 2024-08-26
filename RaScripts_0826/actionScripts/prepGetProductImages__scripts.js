
    const prepGetProductImages = () => {
        context.skuQuery={
    "skus":[]
}
var info=context.getCartItems.response.body.data.cart.lines.edges
for(let i=0;i<info.length;i++){
    context.skuQuery.skus.push(info[i].node.attributes[0].value)
}
context.skuQuery=JSON.stringify(context.skuQuery);
koreDebugger.log("skus: "+context.skuQuery)
    }

