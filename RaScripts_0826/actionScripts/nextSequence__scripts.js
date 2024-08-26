
    const nextSequence = () => {
        context.action=context.entities?.hUpdateProfileOrAddress[0]
if(env.commercePlatformConfig.platformName=="SFCC"&&context.entities.action!="Name"){
    context.eod=true
}
    }

