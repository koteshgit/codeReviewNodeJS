
    const createOrderPayload = () => {
        var BUS=context.session.BotUserSession
var userId=BUS?.UserInfo?.id;

var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName

if (eCommercePlatform == "Shopify") {

    if(context.cartDetails){
        var info=context.getProductId.response.body.data?.products?.edges;
        var cartInfo=context.getCartItems.response.body.data?.cart?.lines?.edges
        var cartDetails=context.cartDetails.selectedItems
        
        var lineItems=[]
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
    var lineItems=[
                {
                    "title": item?.itemTitle,
                    "price": item?.itemPrice,
                    "grams": "1300",
                    "quantity": item?.quantity,
                    "sku":item?.sku,
                    "tax_lines": [
                        {
                            "price": 13.5,
                            "rate": 0.06,
                            "title": "State tax"
                        }
                    ]
                }
            ]
    }
    context.orderPayload={
        "order": {
            "line_items":lineItems ,
            "billing_address": {
                "id":context.shippingAddress.id,
                "first_name": BUS.UserInfo.first_name,
                "last_name":BUS.UserInfo.last_name,
                "address1": context.shippingAddress.address1,
                "address2":context.shippingAddress.address2,
                "phone": BUS.UserInfo.phone,
                "city": context.shippingAddress.city,
                //"province": context.shippingAddress.province,
                "country": context.shippingAddress.country,
                "zip": context.shippingAddress.zip
            },
            "shipping_address": {
                "id":context.shippingAddress.id,
                "first_name": BUS.UserInfo.first_name,
                "last_name":BUS.UserInfo.last_name,
                "address1": context.shippingAddress.address1,
                "address2":context.shippingAddress.address2,
                "phone": BUS.UserInfo.phone,
                "city": context.shippingAddress.city,
                //"province": context.shippingAddress.province,
                "country": context.shippingAddress.country,
                "zip": context.shippingAddress.zip
            },
            "customer": {
        "first_name": BUS.UserInfo.first_name,
        "last_name":BUS.UserInfo.last_name,
        "email":BUS.UserInfo.email,
        "phone":BUS.UserInfo.phone
      },
      "email":BUS.UserInfo.email,
      "phone":BUS.UserInfo.phone,
      "note_attributes": 
                {
                    "stripe_id": context.stripe_id
                },
            "transactions": [
                {
                    "kind": "sale",
                    "status": "success",
                    "amount": context.totalPrice
                }
            ],
            "total_tax": 13.5,
            "currency": "USD"
        }
    }
    koreDebugger.log(JSON.stringify(context.orderPayload))
} else if (eCommercePlatform == "SFCC") { 
    
    
    
    
    
    
}
    }

