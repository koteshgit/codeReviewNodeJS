
    const prepSetCartID = () => {
        customerId=context.session.BotUserSession.UserInfo.id
cartId=context.addToCart.response.body.data.cartCreate?.cart?.id

context.setCartIdPayload=JSON.stringify({
    "customerId":customerId ,
    "cartId": cartId
})
    }

