

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

function change(amount, cent) {
  if (cent <= 3) {
    console.log(cent);
    const i = Math.floor(amount/array[cent]);
    const left = amount - (i * array[cent])
    if( i === 1 ) {
      console.log("one");
      array1[cent] = `${i} ${word[cent]}`;
    }
    else if ( i > 1 ) {
      console.log("more");
      array1[cent] = `${i} ${words[cent]}`;
    }
    else {}
    console.log(array1);
    change(left, cent + 1)
  }
   return array1;
}
console.log(divide(4.0));
