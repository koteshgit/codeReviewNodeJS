
    const parseLocations = () => {
        const locations = context.getLocations.response.body?.locations;
let storeLocations = 'Discover great deals at stores near you!\n\n';
let count = 1;
let addresses = [];
for(let i = 0;i<locations.length;i++) {
    if(locations[i].address1) {
//         storeLocations= storeLocations+`${count++}. ${locations[i].name.toString()} 🛍️
// 🏭${locations[i].address1}, ${locations[i].city}, ${locations[i].zip}
// 📞${locations[i].phone}
// 📍${locations[i].address2}

// `;
 let address= `${count++}. ${locations[i].name.toString()}\nAddress: ${locations[i].address1}, ${locations[i].city}, ${locations[i].zip}\nPhone: ${locations[i].phone}\n${locations[i].address2.toString()}`;
addresses.push(address);
    }
}
storeLocations=storeLocations+ addresses.join('\n\n')+`\n\nHappy Shopping!\n${env.displayStoreName}`;

let payload = {
      "phone": getANI(),
      "message":  storeLocations
    };
context.smsBody = JSON.stringify(payload);
context.NoOfAddresses = addresses.length;
koreDebugger.log(context.smsBody)

    }

