
    const sfccCstrtQueryForProductId = () => {
        var sku = context.entities.sfccSearchResults.indexOf(" ") != -1 ? context.entities.sfccSearchResults.split(" ")[0] : context.entities.sfccSearchResults.split("#")[0];

context.skuQuery = JSON.stringify({
    "skus": [sku]
})

context.getProductIdPayload={
    "searchProductUrl":"https://"+env.shortCode+".api.commercecloud.salesforce.com/search/shopper-search/v1/organizations/"+env.organizationId+"/product-search?siteId="+env.siteId+"&q="+sku,
    "auth":"Bearer "+context.session.BotUserSession?.SfccAccessToken?.accessToken
}
    }

