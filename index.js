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

//const binaryArrayToNumber = (arr) => {
//  const arrReverse = arr.reverse();
//  let sum = 0;
//  arrReverse.forEach((num, index) => {
//    sum += num * 2 ** index;
//  });
//  return sum;
//};

//binaryArrayToNumber([1, 1, 1, 1]);

//function squareDigits(num) {
//  const arr = num
//    .toString()
//    .split("")
//    .map((elem) => elem ** 2);
//  return +arr.join("");
//}
//squareDigits(1234);

//function DNAStrand(dna) {
//  const arr = dna.split("");
//  const newArr = arr.map((elem) => {
//    if (elem === "A") {
//      return "T";
//    }
//    if (elem === "T") {
//      return "A";
//    }
//    if (elem === "C") {
//      return "G";
//    }
//    if (elem === "G") {
//      return "C";
//    }
//    //elem === "A" && "T";
//    //elem === "T" && "A";
//    //elem === "C" && "G";
//    //elem === "G" && "C";
//  });
//  return newArr.join("");
//}
//DNAStrand("ATTGC");

//function reverseWords(str) {
//  return str
//    .split(" ")
//    .map((elem) => elem.split("").reverse().join(""))
//    .join(" ");
//}
//reverseWords("This is an example!");

//const arr = str
//    .split(" ")
//    .map((elem) => elem.split("").reverse().join(""))
//    .join(" ");

//function maskify(cc) {
//  const sliceStr = cc.slice(-4);
//  return sliceStr.padStart(cc.length, "#");
//}

//maskify("12");

//const a = "java";
//const b = "script";
//// J.S.
//function initials(a, b) {
//  return `${a[0].toUpperCase()}.${b[0].toUpperCase()}.`;
//}

//console.log(initials(a, b));

function findOutlier(integers) {
  let countEven = 0;
  let countOdd = 0;
  let evenNum;
  let oddNum;
  integers.forEach((elem) => {
    if (elem % 2 === 0) {
      countEven += 1;
      evenNum = elem;
    } else {
      countOdd += 1;
      oddNum = elem;
    }
  });
  if (countEven > 1) {
    return oddNum;
  } else {
    if (countOdd > 1) {
      return evenNum;
    }
  }
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
