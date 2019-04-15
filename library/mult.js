//Step 1: Store the multiplier and the multiplicand
//Step 2: Add the multiplicand to itself, the number of times indicated by the multiplicand
//Step 3: Return the product
//Step 4: Add conditions for edge case factors (0, 1, negative numbers)
//Step 5: Handle none integer input?

const productSign = require('./productSign');

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

    multiply(multiplier, multiplicand) {
        if (Number.isInteger(multiplier) && Number.isInteger(multiplicand)) {

            // Initialize Local Varibles
            let product = 0;
            let sign = productSign(multiplier, multiplicand);

            // Set Instance Variables
            this.multiplier = multiplier;
            this.multiplicand = multiplicand;

            // Set Local Variables
            let localMultiplier = Math.abs(this.multiplier);
            let localMultiplicand = Math.abs(this.multiplicand);

            /*******************
             * Iterative Case: 
             *******************/
            for (let i = 0; i < localMultiplier; i += 1) {
                    product += localMultiplicand;
                    if (sign < 0) {
                        this.product = -product;
                    } else if (sign === 0) {
                        this.product = 0;
                    } else if (sign > 0) {
                        this.product = product;
                    }
            }
            return this.product;                            
        } else {
            throw new Error('Input must be an Integer');
        } 
    }
}//Mult

module.exports = Mult;