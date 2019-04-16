//Step 1: Store the multiplier and the multiplicand
//Step 2: Add the multiplicand to itself, the number of times indicated by the multiplier
//Step 3: Return the product
//Step 4: Add conditions for edge case factors (0, 1, negative numbers)
//Step 5: Handle none integer input?

class Mult {

    constructor() {
        this._multiplier = 0;
        this._multiplicand = 0;
        this._product = 0;
    }

    get multiplier() {
        return this._multiplier;
    }
    set multiplier(value) {
        this._multiplier = value;
    }
    get multiplicand() {
        return this._multiplicand;
    }
    set multiplicand(value) {
        this._multiplicand = value;
    }
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
    
    // Version 1: Iterative Solution: (Liner Runtime)
    productSign(multiplier, multiplicand) {
        let sign;
        (multiplier < 0)||(multiplicand < 0)? sign = -1 :'' ;
        (multiplier === 0) || (multiplicand === 0)? sign = 0 :'' ;
        (multiplier < 0) && (multiplicand < 0) && (sign = 1);
        (multiplier > 0) && (multiplicand > 0) && (sign = 1);
        return sign;
    } 
    multiply(multiplier, multiplicand) {
        this.multiplier = multiplier;
        this.multiplicand = multiplicand;
        let localMultiplier = this.multiplier;
        let localMultiplicand = this.multiplicand;
        if (Number.isInteger(localMultiplier) && Number.isInteger(localMultiplicand)) {
            let product = 0;
            let sign = this.productSign(localMultiplier, localMultiplicand);
            for(let i = 0; i < Math.abs(localMultiplier); i += 1) {
                product += Math.abs(localMultiplicand);
            }
        this.product = product * sign;
        } else
            throw new Error('Input must be an Integer');        
        return this.product;
    }
} // MULT

module.exports = Mult;