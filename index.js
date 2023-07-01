//function longest(s1, s2) {
//  // your code
//  const arr1 = s1.split("");
//  const arr2 = s2.split("");
//  const arr3 = [...arr1, ...arr2].sort();
//  const arr4 = new Set(arr3);
//  const arr5 = [...arr4];
//  return arr5.join("");
//}

function descendingOrder(n) {
  const str = String(n);

  const arr = str.split("").sort((a, b) => (a < b ? 1 : -1));
  const num = +arr.join("");
  return num;
}

descendingOrder(42145);
