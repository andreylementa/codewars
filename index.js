//function longest(s1, s2) {
//  // your code
//  const arr1 = s1.split("");
//  const arr2 = s2.split("");
//  const arr3 = [...arr1, ...arr2].sort();
//  const arr4 = new Set(arr3);
//  const arr5 = [...arr4];
//  return arr5.join("");
//}

//function descendingOrder(n) {
//  const str = String(n);

//  const arr = str.split("").sort((a, b) => (a < b ? 1 : -1));
//  const num = +arr.join("");
//  return num;
//}

//descendingOrder(42145);

//function validatePIN(pin) {
//  if (pin.length === 4 || pin.length === 6) {
//    const arr = pin.split("");
//    let res = true;
//    arr.forEach((element) => {
//      parseInt(element) || parseInt(element) === 0 ? "" : (res = false);
//    });
//    return res;
//  }
//  return false;
//}

//console.log(validatePIN("333234"));

//console.log(parseInt("0"));

function findShort(s) {
  arr = s.split(" ");
  let count = Infinity;
  arr.forEach((element) => {
    element.length < count ? (count = element.length) : "";
  });
  return count;
}
