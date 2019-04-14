//Step 1: Store the multiplier and the multiplicand
//Step 2: Add the multiplicand to itself, the number of times indicated by the multiplicand
//Step 3: Return the product
//Step 4: Add conditions for edge case factors (0, 1, negative numbers)
//Step 5: Handle none integer input?
class Mult {
    constructor(multiplier, multiplicand) {
        this._multiplier = multiplier;
        this._multiplicand = multiplicand;
        this._product = 0;
    }
    get multiplier() {
        return this._multiplier;
    }
    get multiplicand() {
        return this._multiplicand;
    }
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
    productSign(multiplier, multiplicand) {
        let sign;
        (multiplier < 0)||(multiplicand < 0)? sign = -1 :'' ;
        (multiplier === 0) || (multiplicand === 0)? sign = 0 :'' ;
        (multiplier < 0) && (multiplicand < 0) && (sign = 1);
        (multiplier > 0) && (multiplicand > 0) && (sign = 1);
        return sign;
    } 
    multiply() {
        let multiplier = this.multiplier;
        let multiplicand = this.multiplicand;
        let product = 0;
        let sign = this.productSign(multiplier, multiplicand);
            for(let i = 0; i < Math.abs(multiplier); i += 1) {
                product += Math.abs(multiplicand);
            }//for
        // debugger;
        this.product = product * sign;
        return this.product;
    }//multiply

}//Mult

// let myMult4 = new Mult(-3, 4);
// console.log(myMult4.multiply());

module.exports = Mult;