// function doubleIt(num) {
//     return num * 2;
// }


// const doubleIt = function myFunc(num) {
//     return num * 2;
// }


// ================= arrow function =================
// single parameter
const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result);

// multi parameter
const add = (x, y) => x + y ;
console.log(add(8, 9));

// without parameter
const give5 = () => 5;
console.log(give5());

// multi line body part
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doMath(7 , 5));