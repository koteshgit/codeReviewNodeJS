
    const prepEnumsToDisplayCart = () => {
        // Extract the cart line items from the getCartItems response body.
info = context.getCartItems.response.body.data.cart.lines.edges
context.cartItemIds = []
// Go through over each item in the info array.
for(let i=0;i<info.length;i++){
    // Push a new object into the cartItemIds array with name, val, and syn properties.
    context.cartItemIds.push({
    name: info[i]?.node.id,
    val: info[i]?.node?.id,
    syn: [ "\""+info[i]?.node?.id+"\"" ]
}) 
}
   context.cartItemIds.push({
    name: 'Save',
    val: 'Save',
    syn: [ "\"Save\"" ]
},{
    name: 'Check out',
    val: 'Check out',
    syn: [ "\"Check out\"" ]
})

    }

