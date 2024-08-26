
    const sfccCreateOrderPayload = () => {
        var BUS=context.session.BotUserSession
var userId=BUS?.UserInfo?.id;
if(context.cartDetails){
    var info=context.sfccGetProductId.response.body.data?.products?.edges;
    var cartInfo=context.getCartItems.response.body.data?.cart?.lines?.edges
    var cartDetails=context.cartDetails.selectedItems
    
    var productItems=[]
    for(let i=0;i<cartDetails.length;i++){
          lineItems.push({
                "title": cartDetails[i].title,
                "price": parseFloat(cartDetails[i].price),
                "grams": "1300",
                "sku":cartDetails[i].sku,
                "quantity": cartDetails[i].quantity,
                "tax_lines": [
                    {
                        "price": 13.5,
                        "rate": 0.06,
                        "title": "State tax"
                    }
                ]
            })    
        
    }
}else{
var item=context.productDetails||{}
var productItems=[
            {
                "productId": item.ItemId,
                "quantity": item?.quantity
            }
            
        ]
}
context.orderPayload={
    "customerInfo": {
        "email": BUS.UserInfo.email,
        "customerNo": BUS.UserInfo.id
    },
    "billingAddress": {
        "firstName": BUS.UserInfo.first_name,
        "lastName": BUS.UserInfo.last_name,
        "address1": context.shippingAddress.address1,
        "city": context.shippingAddress.city,
        "postalCode": "01801",
        "stateCode": "MA",
        "countryCode": "US"
    },
    "shipments": [
        {
            "shippingMethod": {
                "id": "001"
            },
            "shippingAddress": {
                "firstName": BUS.UserInfo.first_name,
                "lastName": BUS.UserInfo.last_name,
                "address1": context.shippingAddress.address1,
                "city": context.shippingAddress.city,
                "postalCode": "01801",
                "stateCode": "MA",
                "countryCode": "US"
            }
        }
    ],
    "paymentInstruments": [
        {
            "amount": 1,
            "paymentCard": {
                "expirationYear": 1990,
                "expirationMonth": 7,
                "validFromMonth": 8,
                "validFromYear": 2007,
                "issueNumber": "i117",
                "maskedNumber": "*********4242",
                "holder": "Miller",
                "cardType": "Visa"
            },
            "paymentMethodId": "CREDIT_CARD"
        }
    ],
    "productItems": productItems
}
context.orderHeaders={
    auth:"Bearer "+context.session.BotUserSession?.SfccAccessToken?.accessToken,
    createOrderUrl:"https://"+env.shortCode+".api.commercecloud.salesforce.com/checkout/shopper-orders/v1/organizations/"+env.organizationId+"/orders?siteId="+env.siteId,
    createBasketUrl:"https://"+env.shortCode+".api.commercecloud.salesforce.com/checkout/shopper-baskets/v1/organizations/"+env.organizationId+"/baskets?siteId="+env.siteId
}
koreDebugger.log(JSON.stringify(context.orderPayload))









// {
//     "order": {
//         "line_items":lineItems ,
//         "billing_address": {
//             "id":context.shippingAddress.id,
//             "first_name": BUS.UserInfo.first_name,
//             "last_name":BUS.UserInfo.last_name,
//             "address1": context.shippingAddress.address1,
//             "address2":context.shippingAddress.address2,
//             "phone": BUS.UserInfo.phone,
//             "city": context.shippingAddress.city,
//             //"province": context.shippingAddress.province,
//             "country": context.shippingAddress.country,
//             "zip": context.shippingAddress.zip
//         },
//         "shipping_address": {
//             "id":context.shippingAddress.id,
//             "first_name": BUS.UserInfo.first_name,
//             "last_name":BUS.UserInfo.last_name,
//             "address1": context.shippingAddress.address1,
//             "address2":context.shippingAddress.address2,
//             "phone": BUS.UserInfo.phone,
//             "city": context.shippingAddress.city,
//             //"province": context.shippingAddress.province,
//             "country": context.shippingAddress.country,
//             "zip": context.shippingAddress.zip
//         },
//         "customer": {
//     "first_name": BUS.UserInfo.first_name,
//     "last_name":BUS.UserInfo.last_name,
//     "email":BUS.UserInfo.email,
//     "phone":BUS.UserInfo.phone
//   },
//   "email":BUS.UserInfo.email,
//   "phone":BUS.UserInfo.phone,
//   "note_attributes": 
//             {
//                 "stripe_id": context.stripe_id
//             },
//         "transactions": [
//             {
//                 "kind": "sale",
//                 "status": "success",
//                 "amount": context.totalPrice
//             }
//         ],
//         "total_tax": 13.5,
//         "currency": "USD"
//     }
// }
    }

