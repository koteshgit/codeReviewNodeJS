
    const validateUserInput = () => {
        var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName
if (eCommercePlatform === "Shopify") {

    if (context.logIn.response.body?.data?.customerAccessTokenCreate?.customerAccessToken?.accessToken) {
        context.isValidCredentials = true
    } else {
        delete context.entities.password
        context.noOfUserLogInAttempts = (context?.noOfUserLogInAttempts || 0) + 1;
    }
} else if (eCommercePlatform === "SFCC") {
    if (context.usid && context.auth_code) {
        context.isValidCredentials = true
    } else {
        delete context.entities.password
        context.noOfUserLogInAttempts = (context?.noOfUserLogInAttempts || 0) + 1;
    }
}
    }

