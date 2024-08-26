
    const sfccAuthPayload = () => {
        const secretKey = env.authSecretKey;
const length = env.authSecretKeyLength;


var verifier = "";
for (var i = 0; i < length; i++) {
  verifier += secretKey.charAt(Math.floor(Math.random() * secretKey.length));
}
let hash = koreUtil.hash('sha256').update(verifier).digest();
let challenge = hash.toString('base64')
  .replace(/=/g, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_');

// koreDebugger.log('verifier' + verifier + 'challenge' + challenge);
const redirectUri = env.redirectUri;
const siteId = env.siteId;
const shortCode = env.shortCode;
const organizationId = env.organizationId;
const client_id = env.client_id;
const hint = env.hint;
const authtokenurl = `https://${shortCode}.api.commercecloud.salesforce.com/shopper/auth/v1/organizations/${organizationId}/oauth2/authorize?response_type=code&client_id=${client_id}&channel_id=${siteId}&redirect_uri=${redirectUri}&hint=${hint}&code_challenge=${challenge}`;
context.authtokenurl = authtokenurl;
context.verifier = verifier;
    }

