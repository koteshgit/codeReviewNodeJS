
    const sfccPrepareTokenBody = () => {
        let body = context.sfccAuthorizeCustomer.response.body;
let location = body?.errors[0]?.responseHeaders?.location;
const usid = location.split("&")[0].split('=')[1];
const auth_code = location.split("&")[1].split('=')[1];

const redirectUri = env.redirectUri;
const siteId = env.siteId;
const shortCode = env.shortCode;
const organizationId = env.organizationId;
const client_id = env.client_id;
const hint = env.hint;
const accesstokenurl = `https://${shortCode}.api.commercecloud.salesforce.com/shopper/auth/v1/organizations/${organizationId}/oauth2/token`;
context.accesstokenurl = accesstokenurl;
context.accessTokenBody = {
    code: auth_code,
    usid,
    grant_type: "authorization_code_pkce",
    redirect_uri: redirectUri,
    code_verifier: context.verifier,
    client_id,
    channel_id: siteId
};


    }

