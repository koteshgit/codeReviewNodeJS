
    const prepGetCartItems = () => {
        if(context?.getCartId?.response?.body?.metafields[0]?.value){
context.getCartItemsPayload=JSON.stringify({
    "cartId": context.getCartId.response.body.metafields[0].value
})
}
    }

