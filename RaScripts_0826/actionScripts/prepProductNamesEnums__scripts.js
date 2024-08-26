
    const prepProductNamesEnums = () => {
        orders = context.orderStatus;
productTitles = [];

for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < orders[i].result.length; j++) {
        productTitles.push(orders[i].result[j].name);
    }
}

context.prodNameAndIds = convertToEnumObj(productTitles);

    }

