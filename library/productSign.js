// ProductSign: Helper Function to determine the sign of the product.
function productSign(multiplier, multiplicand) {
    let sign = 1;
    if (multiplier === 0 || multiplicand === 0) {
        sign = 0;
    } else if (multiplier < 0 && multiplicand < 0 
            || multiplier > 0 && multiplicand > 0) {
                sign = 1;
    } else if (multiplier < 0 || multiplicand < 0) {
        sign = -1;
    }
    return sign;
}

module.exports = productSign;