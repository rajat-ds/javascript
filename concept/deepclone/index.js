const cloneDeep = require('lodash').cloneDeep;
const clone = require('ramda').clone;
const rfdcClone = require('rfdc')();


// Lodash Deep Clone
// https://lodash.com/docs/4.17.15#cloneDeep
let lodash_arr1 = [{ language: 'java', creator: [{ name: 'James Gosling' }] }, { language: 'python' }]
let lodash_arr2 = cloneDeep(lodash_arr1);
lodash_arr2[0].language = 'javascript';
lodash_arr2[0].creator[0].name = 'Brendan Eich';
console.log("Lodash")
console.log("Array1 =>",JSON.stringify(lodash_arr1))
console.log("Array2 =>",JSON.stringify(lodash_arr2))
console.log("\n\n")


// RFDC Deep Clone
// https://www.npmjs.com/package/rfdc
let rfdc_arr1 = [{ language: 'java', creator: [{ name: 'James Gosling' }] }, { language: 'python' }]
let rfdc_arr2 = rfdcClone(rfdc_arr1);
rfdc_arr2[0].language = 'javascript';
rfdc_arr2[0].creator[0].name = 'Brendan Eich';
console.log("RFDC")
console.log("Array1 =>",JSON.stringify(rfdc_arr1))
console.log("Array2 =>",JSON.stringify(rfdc_arr2))
console.log("\n\n")


// Ramda Deep Clone
// https://ramdajs.com/docs/#clone
let r_arr1 = [{ language: 'java', creator: [{ name: 'James Gosling' }] }, { language: 'python' }]
let r_arr2 = clone(r_arr1);
r_arr2[0].language = 'javascript';
r_arr2[0].creator[0].name = 'Brendan Eich';
console.log("Ramda")
console.log("Array1 =>",JSON.stringify(r_arr1))
console.log("Array2 =>",JSON.stringify(r_arr2))
console.log("\n\n")


// Custom function 1
// https://gist.github.com/djD-REK/e8b1497e7fbf0374e4eada669e5609cf#file-custom-deep-copy-function-using-recursion-js
const deepCopyFunction = (inObject) => {
    let outObject, value, key

    if (typeof inObject !== "object" || inObject === null) {
        return inObject // Return the value if inObject is not an object
    }

    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}

    for (key in inObject) {
        value = inObject[key]

        // Recursively (deep) copy for nested objects, including arrays
        outObject[key] = deepCopyFunction(value)
    }

    return outObject
}


let cf1_arr1 = [{ language: 'java', creator: [{ name: 'James Gosling' }] }, { language: 'python' }]
let cf1_arr2 = deepCopyFunction(cf1_arr1);
cf1_arr2[0].language = 'javascript';
cf1_arr2[0].creator[0].name = 'Brendan Eich';
console.log("Custom function 1")
console.log("Array1 =>",JSON.stringify(cf1_arr1))
console.log("Array2 =>",JSON.stringify(cf1_arr2))
console.log("\n\n")




// Custom function 2
// https://stackoverflow.com/a/4460624
function cloneObject(item) {
    if (!item) { return item; } // null, undefined values check

    var types = [Number, String, Boolean],
        result;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function (type) {
        if (item instanceof type) {
            result = type(item);
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call(item) === "[object Array]") {
            result = [];
            item.forEach(function (child, index, array) {
                result[index] = cloneObject(child);
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                result = item.cloneNode(true);
            } else if (!item.prototype) { // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    // it is an object literal
                    result = {};
                    for (var i in item) {
                        result[i] = cloneObject(item[i]);
                    }
                }
            } else {
                // depending what you would like here,
                // just keep the reference, or create new object
                if (false && item.constructor) {
                    // would not advice to do that, reason? Read below
                    result = new item.constructor();
                } else {
                    result = item;
                }
            }
        } else {
            result = item;
        }
    }

    return result;
}



let cf2_arr1 = [{ language: 'java', creator: [{ name: 'James Gosling' }] }, { language: 'python' }]
let cf2_arr2 = cloneObject(cf2_arr1);
cf2_arr2[0].language = 'javascript';
cf2_arr2[0].creator[0].name = 'Brendan Eich';
console.log("Custom function 2")
console.log("Array1 =>",JSON.stringify(cf2_arr1))
console.log("Array2 =>",JSON.stringify(cf2_arr2))