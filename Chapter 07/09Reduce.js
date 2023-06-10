// reduce method

// Run reducer function for each array element
// Array.reduce(function(total,currentValue),initialValue)
// It return single value

let num = [1,5,8,3,9,4];

let sum = num.reduce(function(total,currentVal){
    return total + currentVal
},0)

console.log(sum);