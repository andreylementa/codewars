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

//function findShort(s) {
//  arr = s.split(" ");
//  let count = Infinity;
//  arr.forEach((element) => {
//    element.length < count ? (count = element.length) : "";
//  });
//  return count;
//}

//function filter_list(l) {
//  const arr = l.filter((value) => typeof value === "number");
//  return arr;
//}

//function digitalRoot(n) {
//  const str = String(n);
//  let arr = str.split("");
//  let sum = 0;
//  if (arr.length > 1) {
//    arr = arr.map((num) => {
//      sum += +num;
//    });
//  } else {
//    sum = arr[0];
//  }
//  return sum;
//}

//console.log(digitalRoot(1993));

const binaryArrayToNumber = (arr) => {
  const arrReverse = arr.reverse();
  let sum = 0;
  arrReverse.forEach((num, index) => {
    sum += num * 2 ** index;
  });
  return sum;
};

binaryArrayToNumber([1, 1, 1, 1]);
