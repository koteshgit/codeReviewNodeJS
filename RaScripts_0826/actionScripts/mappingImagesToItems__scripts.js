
    const mappingImagesToItems = () => {
        // Extract the product information from the context's getProductId response
var prodInfo = context.getProductId.response.body.data.products.edges
const skuToImageMap = {};
// Iterate over each product to populate the skuToImageMap
prodInfo.forEach(product => {
    const sku = product?.node?.variants.edges[0]?.node.sku;
    const imageUrl = product?.node?.images?.edges[0]?.node?.src;
    // If both SKU and image URL are found, add them to the skuToImageMap
    if (sku && imageUrl) {
        skuToImageMap[sku] = imageUrl;
    }
});
// Iterate over each eligible line item in the context
context.eligibleLineItems.forEach(item => {
    const sku = item.sku;
    // If the SKU exists and there's a corresponding image URL in the map, add the imageUrl property to the item
    if (sku && skuToImageMap[sku]) {
        item['imageUrl'] = skuToImageMap[sku];
    }
});

//construct enums
context.lineItemIds = convertToEnumObj(context.eligibleLineItems.map(item => item.id));

    }

