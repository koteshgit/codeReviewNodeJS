
    const mapImagesToLineItems = () => {
        //Parse the eCommerce platform configuration from an environment variable and store the platform name.
var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
context.imageSkuMap = {}
if (eCommercePlatform == "Shopify") {
    // Retrieve the product data from the context's response body.
    var images = context.getProductId.response.body?.data?.products?.edges
    context.priceSkuMap={}
    context.titleSkuMap={}
    for(i=0;i<images.length ; i++){
        //Map the SKU to its corresponding image URL, with a fallback image URL if not found.
        context.imageSkuMap[images[i].node.variants.edges[0].node.sku] = images[i]?.node?.images?.edges[0]?.node?.src || "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"  //If the image is not found in the api then this not found image will display
        context.titleSkuMap[images[i].node.variants.edges[0].node.sku] = images[i].node.title   
        context.priceSkuMap[images[i].node.variants.edges[0].node.sku] = images[i].node.variants.edges[0].node.price
    } 
}else if (eCommercePlatform == "SFCC") {
    context.imageSkuMap = context.getProductId.response.body;
}
koreDebugger.log("imagesMap" + JSON.stringify(context.imageSkuMap));  
//constructing Enums
    }

