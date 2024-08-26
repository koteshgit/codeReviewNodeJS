
    const setCustomDataOnBus = () => {
        context.session.BotUserSession.UserInfo=JSON.parse(context.getCustomData.response.body.records[0].userInfo)
lastIntent={
    "IVROrderCancelation":"Cancel an Order",
    "IVRFindanOrder":"Find an Order",
    "IVR Return and Refund Status":"Get Return, Exchange or Refund Status"
}
context.lastIntent=lastIntent[context?.getCustomData?.response?.body?.records[0]?.lastIntent]
    }

