
    const fillterTheAddress = () => {
        if (context.entities.selectAddress) {
  var addressId = context.entities.selectAddress;
  // Determine which address to select based on the addressId.If the addressId is not 'Add New', filter the address by ID; otherwise, set selectedAddress to null.
  var selectedAddress = addressId !== 'Add New'
    ? filterAddressById(context.fetchDeliveryAddressDetails.response.body, addressId)
    : null;
  var eCommercePlatform = JSON.parse(env.commercePlatformConfig).platformName

  // If the user has selected 'Add New' as the address and the eCommerce platform is "SFCC",setting a flag indicating that the service for adding a new address is needed.    
  if (addressId === 'Add New' && eCommercePlatform == "SFCC") {
    context.addNewAddressSeriveNeeded = true;
  }
} else {
  // When no specific address is selected, determine the default or preferred address index.    
  if (context.fetchDeliveryAddressDetails.response.body.addresses.length == 1) {
    var index = 0
  } else {
    var index = context.fetchDeliveryAddressDetails.response.body.addresses.findIndex(address => (address.default === true || preferred === true));

  }
  var selectedAddress = context.fetchDeliveryAddressDetails.response.body.addresses[index]
}

// Function to filter a customer's addresses by ID.
function filterAddressById(body, id) {
  var customerAddresses = body?.addresses;
  return customerAddresses?.find(address => (address.id === parseInt(id) || address.id === id) || null);
}
// Construct the shipping address object using selectedAddress details.
context.shippingAddress = {
  "id": selectedAddress?.id || "",
  "address1": selectedAddress?.address1 || context.forms?.AddressDetails.addressLine1,
  "address2": selectedAddress?.address2 || context.forms?.AddressDetails.state,
  "city": selectedAddress?.city || context.forms?.AddressDetails.city,
  "zip": selectedAddress?.zip || context.forms?.AddressDetails.zipcode,
  //"province": selectedAddress?.province || "",
  "country": selectedAddress?.country || context.forms?.AddressDetails.country,
  "province_code": selectedAddress?.province_code || ""
};

    }

