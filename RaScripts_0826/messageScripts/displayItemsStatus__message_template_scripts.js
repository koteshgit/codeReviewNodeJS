var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName


var orderDetails = context.getOrdersDetails.response?.body?.orders
var trackingStatus = context.getOrderTrackingInfo?.response?.body


    for (let i = 0; i < orderDetails.length; i++) {
        itemNum = context.entities.itemId.split('&')[0]
        orderNum = context.orderId
        if (orderDetails[i].id == orderNum) {
            Item = []
            for (j = 0; j < orderDetails[i].line_items.length; j++) {
                if (orderDetails[i].line_items[j].id == itemNum) {
                    Item.push(orderDetails[i].line_items[j])
                }

            }
            orderDetails[i].line_items = Item
            orderDetails = orderDetails[i]
        }
    }


var elements = [];
var deliveryDateNeeded = ["fulfilled" , "Placed", "In Transit"]




var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Item details",
        "showMore": "false",
        "showMoreTitle": "show More", // we can customize
        "displayLimit": "3", // limit for show more
        "isSelectionEnabled": "true",
        "elements": []
    }
}
let orderDate = orderDetails.created_at?.split("T")[0];
let orderId = orderDetails.id;
let i = context.entities.recentOrderItems ? 1 : orderDetails.line_items.length;
let billingAddress = orderDetails.billing_address;
let address;
if (eCommercePlatform == "Shopify") {
let shippingAddress = orderDetails.shipping_address
if(billingAddress?.address1)
    address = billingAddress?.address1+", "+billingAddress?.city+", "+billingAddress?.address2+", "+billingAddress?.country+" "+billingAddress?.zip

if(shippingAddress?.address1)
    address = shippingAddress?.address1+", "+shippingAddress?.city+", "+shippingAddress?.address2+", "+shippingAddress?.country+" "+shippingAddress?.zip

}
if (eCommercePlatform == "SFCC") {
        // address = billingAddress?.address1||""+", "+billingAddress?.city||""+", "+billingAddress?.address2||""+", "+billingAddress?.country||""+" "+billingAddress?.zip||""
        let addressParts = [
                billingAddress?.address1,
                billingAddress?.city,
                billingAddress?.address2,
                billingAddress?.country,
                billingAddress?.zip
        ];
        address = addressParts.filter(part => part).join(", ");
}

for (const orderItem of orderDetails.line_items) {
    i = i-1;
    let itemStatus;
    if (eCommercePlatform == "Shopify") {
    itemStatus = trackingStatus[orderItem.id]?.status || "";
    } 
    if (eCommercePlatform == "SFCC") {
        itemStatus ="Placed";
    }
    let trackingUrl = trackingStatus[orderItem.id]?.trackingUrl || "";
    // let deliveryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleString().split(",")[0];
    const currentItem = {
        "icon": context.imageSkuMap[orderItem.sku],
        "title": orderItem.name,
        //"subtitle": "QTY: " + orderItem.quantity + " x $" + orderItem.price,
        "flag": "ItemdetailsScreen",
        "titleStyle": {
            "color": "#101828",
            "font-size": "12px",
        },
        "subTitleStyle": {
            "color": "#101828",
            "font-size": "14px",
        },
        "description": [
            {
                "title": "Qty:",
                "value": orderItem.quantity + " x $" + orderItem.price,
                "detailStyle": {
                    "color": "#344054",
                    "font-size": "12px",
                    "font-weight": "400"
                },
            },
        ],
        "descriptionDetails": [
            {
                "title": "Order Date",
                "value": ": " + orderDate,
            },
            {
                "title": "Order ID",
                "value": ": " + orderId,
            },
            {
                "title": "Item ID",
                "value": ": " + orderItem.id,
            },
            {
                "title": "Order Total",
                "value": ": " + getFormattedCurrency(orderDetails.total_price) + " (" + orderDetails.line_items.length + " Items)",
            },
            {
                "title": "Status",
                "value": ": " + itemStatus,
                "valueStyle": {
                    "color": "#039855"
                }
            },
            {
                "title": "Shipping Address",
                "value": ": " +(address || "No shipping Address"),
            }
        ]
    };
    if(eCommercePlatform == "SFCC") {
        currentItem.icon = context.imageSkuMap[orderItem.id]?.imageUrl
    }
    let deliveryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    if (trackingStatus[orderItem.id]?.status == 'Delivered') {
         let trackingDate = trackingStatus[orderItem.id]?.deliveryDate?.split("T")[0] || trackingStatus[orderItem.id]?.updatedAt?.split("T")[0];
        currentItem["descriptionDetails"].push({
                "title": "Delivered Date",
                "value": ": " +trackingDate
        })
    }
    else if(deliveryDateNeeded.includes(trackingStatus[orderItem.id]?.status)){
        currentItem["descriptionDetails"].push({
                "title": "Est.Delivery Date",
                "value": ": " + deliveryDate
        })
        
        
    }

    if (trackingUrl) {
        currentItem.descriptionDetails.push({
            "title": "Tracking Url",
            "value":  trackingUrl,
        });
    }
    if (i == 0) {
        
        currentItem["summaryDetails"] = [
            {
                "title": "Order Summary",
                "description": [
                    {
                        "title": "Order Price",
                        "value": getFormattedCurrency(orderDetails.total_line_items_price)
                    },
                    {
                        "title": "Tax",
                        "value": getFormattedCurrency(orderDetails.total_tax)
                    },
                    {
                        "title": "Total",
                        "value": getFormattedCurrency(orderDetails.total_price)
                    },
                    {
                        "title": "Discount",
                        "value": getFormattedCurrency(orderDetails.total_discounts)
                    }
                ]
            }
        ],
            currentItem["totalSummary"] = [
                {
                    "title": "Order Total",
                    "value": getFormattedCurrency(orderDetails.total_price)
                },
            ]
    }
    elements.push(currentItem);
}

message.payload.elements = elements;
 var agentMsg = "Details\n";

    for (let i = 0; i < message.payload.elements.length ; i++) {
      agentMsg += "________________________________\n"
      let ele = message.payload?.elements[i];
      agentMsg += "Title : " + ele.title + "\n"
      agentMsg += ele?.description[0]?.title + " " + ele?.description[0]?.value + "\n";
    }
    message["text"] = agentMsg;
print(JSON.stringify(message));
