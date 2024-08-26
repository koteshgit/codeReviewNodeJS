
    const prepUpdateProfile = () => {
        var platformName=JSON.parse(env.commercePlatformConfig).platformName;
context.platformName=platformName
context.profileFields=[]
if(platformName=="SFCC"){
    context.profileFields.push({
    name: 'Name',
    val: 'Name',
    syn: [ 'Name' ]
})
}else if(platformName=="Shopify"){
       context.profileFields.push({
    name: 'Name',
    val: 'Name',
    syn: [ 'Name' ]
},{
    name: 'Email',
    val: 'Email',
    syn: [ 'Email' ]
},{
    name: 'Phone Number',
    val: 'Phone Number',
    syn: [ 'Phone Number' ]
}) 
    }
    }

