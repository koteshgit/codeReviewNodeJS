
    const extactStoreFrontToken = () => {
        bus = context.session?.BotUserSession
bus.ShopifyAdmin["storeFrontUrl"] = "https://"+bus.ShopifyAdmin["storeUrl"]+"/api/2023-10/"
bus.ShopifyAdmin["storeAdminUrl"] = "https://"+bus.ShopifyAdmin["storeUrl"]+"/admin/api/2023-10/";



koreDebugger.log("SHopify Admin Token captured for Facebook Channel");
    }

