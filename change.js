

// divide dolors from cents
const array = [25, 10, 5, 1];
let array1 = [];
const word = ["quarter", "dime", "nickle", "penny"];
const words = ["quarters", "dimes", "nickles", "pennies"];

function divide(input) {
  const amount = (input * 100);
  const total = change(amount, 0);
  return total;
}
S
function change(amount, cent) {
  if (cent <= 3) {
    const i = Math.floor(amount/array[cent]);
    const left = amount - (i * array[cent])
    if( i === 1 ) {
      array1[cent] = `${i} ${word[cent]}`;
    }
    else if ( i > 1 ) {
      array1[cent] = `${i} ${words[cent]}`;
    }
    else {}
    change(left, cent + 1)
  }
   return array1;
}
console.log(divide(4.0));
