

// divide dolors from cents
// const array = [25, 10, 5, 1];
// let array1 = [];
// const word = ["quarter", "dime", "nickle", "penny"];
// const words = ["quarters", "dimes", "nickles", "pennies"];

// function divide(input) {
//   const amount = (input * 100);
//   const total = change(amount, 0);
//   return total;
// }
// S
// function change(amount, cent) {
//   if (cent <= 3) {
//     const i = Math.floor(amount/array[cent]);
//     const left = amount - (i * array[cent])
//     if( i === 1 ) {
//       array1[cent] = `${i} ${word[cent]}`;
//     }
//     else if ( i > 1 ) {
//       array1[cent] = `${i} ${words[cent]}`;
//     }
//     else {}
//     change(left, cent + 1)
//   }
//    return array1;
// }


// function divide2(input2) {
//   const amount = (input2 * 100);
//   return function(amount) {
//         change(amount, )
//     }
// }

// const number = divide(input)
// number()
// console.log(divide(4.0));

// function d(in) {

// }

function changeFinder(coinValue) {
    return function(amount) {
      const count = Math.floor(amount / coinValue);
      const remain = amount%coinValue; 
        return `${count} and ${remain} remaining`;
    }
}
const input = 167;
const quarter = changeFinder(25);
const dime = changeFinder(10);
const nickle = changeFinder(5);
const penny = changeFinder(1);
console.log(`In quarters = ${quarter(input)}, In dimes = ${dime(input)}, In nickles = ${nickle(input)}, In pennies = ${penny(input)}`);