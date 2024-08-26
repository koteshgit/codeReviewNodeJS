
    const prepEnumsForDaddress = () => {
        var data=context.fetchDeliveryAddressDetails.response.body.addresses
context.addressIds = convertToEnumObj(data.map((addressIds) => addressIds.id))//botFunc
context.addressIds.push({
    name: 'View More',
    val: 'View More',
    syn: [ "\"View More\"" ]
})
    }

