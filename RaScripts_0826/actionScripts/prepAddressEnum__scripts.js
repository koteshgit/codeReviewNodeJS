
    const prepAddressEnum = () => {
        // Retrieve the list of delivery addresses from the response body of a previously made fetchDeliveryAddressDetails call.
var data = context.fetchDeliveryAddressDetails.response.body.addresses
// Convert the array of address objects to an enumeration object using the map function and a custom convertToEnumObj function.
context.addressIds = convertToEnumObj(data.map((addressIds) => addressIds.id))//botFunc
context.addressIds.push({
    name: 'Add New',
    val: 'Add New',
    syn: [ "\"Add New\"" ]
},{
    name: 'View More',
    val: 'View More',
    syn: [ "\"View More\"" ]
},{
    name: 'View More',
    val: 'View More',
    syn: [ "\"View More\"" ]
})
    }

