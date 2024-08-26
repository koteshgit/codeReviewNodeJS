
    const prepAddToCartPayload = () => {
        bus=context.session.BotUserSession
var productId = context.getProductId.response.body.data?.products?.edges[0]?.node?.variants?.edges[0]?.node
var SKU=productId?.sku
productId=productId?.id
if(context.getCartItems.response.body?.data?.cart){
    context.addToCartPayload=JSON.stringify({
    "cartId": context.getCartId.response.body.metafields[0].value,
    "lines": [
        {
        "merchandiseId": productId,
        "quantity": context?.cartQuantity||1,
        "attributes": [
          {
            "key": "SKU",
            "value": SKU
          }]
      }
    ]
})
context.cartRoute="addCartItems"
}else{
    context.addToCartPayload=JSON.stringify({
    "cartInput": {
      "lines": [
        {
          "quantity": context?.cartQuantity||1,
          "merchandiseId": productId,
        "attributes": [
          {
            "key": "SKU",
            "value": SKU
          }]
        }
      ]
    }
  })
  
context.cartRoute="createCart"
}

    }

