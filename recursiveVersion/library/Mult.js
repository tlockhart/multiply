//Step 1: Store the multiplier and the multiplicand
//Step 2: Add the multiplicand to itself, the number of times indicated by the multiplier
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
    
    //Version 3: Recursive Approach
    productSign(multiplier, multiplicand) {
        let sign = 1;
        if (multiplier === 0 || multiplicand === 0) {
            sign = 0;
        }
        else if (multiplier < 0 && multiplicand < 0 
              || multiplier > 0 && multiplicand > 0) {
                    sign = 1;
        }
        else if (multiplier < 0 || multiplicand < 0) {
            sign = -1;
        }
        return sign;
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

            /***************
             * Base Case 1: 
             ***************/
            if (localMultiplier === 0) {
                if (sign === 0) {
                    product = 0;
                    this.product = product;
                }                        
                return this.product;
            } 
            /*******************
             * Recursive Case 2: 
             *******************/
            if (localMultiplier > 0) {
                if (sign < 0) {
                    product = -localMultiplicand;
                    this.product = product;
                }  else if (sign > 0) {
                    product = localMultiplicand
                    this.product = product;
                }
                // NOTE: CONVERGENCE CRITERIA 
                // If the multiplier is negative, you must add 1 to make it converge.
                // If the multiplier is positive, you must subtract 1 to make it converge.
                this.product = this.product 
                                + this.multiply(multiplier < 0? 
                                                multiplier + 1: 
                                                multiplier - 1, 
                                                multiplicand);
                return this.product;
            }                      
        } else {
            throw new Error('Input must be an Integer');
        }
    }
} // Mult

// const myMult1 = new Mult();
// console.log("0 , 1", myMult1.multiply(0, 1));

// const myMult2 = new Mult();
// console.log("0, 4", myMult2.multiply(0, 4));

// const myMult3 = new Mult();
// console.log("2, 4", myMult3.multiply(2, 4));

// const myMult4 = new Mult();
// console.log("-2, -4", myMult4.multiply(-2, -4));

// const myMult5 = new Mult();
// console.log("3, -4", myMult5.multiply(3, -4));

module.exports = Mult;