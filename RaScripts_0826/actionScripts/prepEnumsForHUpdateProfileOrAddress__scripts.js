
    const prepEnumsForHUpdateProfileOrAddress = () => {
        var platformName=JSON.parse(env.commercePlatformConfig).platformName;
context.platformName=platformName
context.profileFields=[{
    name: 'Address',
    val: 'Address',
    syn: [ 'Address','location' ]
}]
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
    syn: [ 'Email','email address','email id','mail id','mail' ]
},{
    name: 'Phone Number',
    val: 'Phone Number',
    syn: [ 'Phone Number','number','contact details' ]
}) 
    }
    }

