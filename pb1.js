function calculateVAT(price) {

    if (typeof price !== 'number' || price < 0) {
        return 'Invalid';
    }

    const priceOfVat = price * (7.5 / 100);
    return priceOfVat;
}




const result = calculateVAT("foo");
console.log(result);

