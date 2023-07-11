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

//function findOutlier(integers) {
//  let countEven = 0;
//  let countOdd = 0;
//  let evenNum;
//  let oddNum;
//  integers.forEach((elem) => {
//    if (elem % 2 === 0) {
//      countEven += 1;
//      evenNum = elem;
//    } else {
//      countOdd += 1;
//      oddNum = elem;
//    }
//  });
//  if (countEven > 1) {
//    return oddNum;
//  } else {
//    if (countOdd > 1) {
//      return evenNum;
//    }
//  }
//}

//console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

//function SeriesSum(n) {
//  let count = 0;
//  let a = 1;
//  let sum = 0;
//  while (count < n) {
//    sum += 1 / a;
//    a += 3;
//    count++;
//  }
//  return sum.toFixed(2);
//}

//console.log(SeriesSum(5));

//function isTriangle(a, b, c) {
//  if (a + b > c && a + c > b && c + b > a) {
//    return true;
//  } else {
//    return false;
//  }
//}

//console.log(isTriangle(1, 2, 2));

//function order(words) {
//  if (words.length === 0) {
//    return "";
//  } else {
//    const arr = words.split(" ");
//    const newArr = arr.map((elem) => {
//      for (let i = 0; i < elem.length; i++) {
//        parseInt(elem[i]) && (elem = elem[i] + elem.replace(elem[i], ""));
//      }
//      return elem;
//    });
//    const arrResult = [];
//    //console.log(arr);
//    //console.log(newArr.sort());
//    newArr.sort().forEach((element) => {
//      arr.forEach((elem) => {
//        //console.log(elem.replace(/[0-9]/g, ""));
//        element.replace(/[0-9]/g, "") === elem.replace(/[0-9]/g, "") &&
//          arrResult.push(elem);
//      });
//    });
//    console.log(arrResult);
//    return arrResult.join(" ");
//  }
//}

//console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

//function order(words) {
//  const obj = {};
//  if (words.length === 0) {
//    return "";
//  } else {
//    const arr = words.split(" ");
//    arr.forEach((element) => {
//      for (let i = 0; i < element.length; i++) {
//        parseInt(element[i]) && (obj[element[i]] = element);
//      }
//    });
//    const resultArr = [...Object.values(obj)];
//    return resultArr.join(" ");
//  }
//}

//order("is2 Thi1s T4est 3a");

//function expandedForm(num) {
//  const str = num.toString();
//  let zeros = "0".repeat(str.length - 1);
//  let result = "";
//  for (let i = 0; i < str.length; i++) {
//    if (str[i] !== "0") {
//      i !== str.length - 1
//        ? (result += `${str[i]}${zeros} + `)
//        : (result += `${str[i]}`);
//    }

//    zeros = zeros.slice(0, -1);
//  }
//  if (result.slice(-3) === " + ") {
//    result = result.slice(0, -3);
//  }
//  return result;
//}
//console.log(expandedForm(89892300));

//function twoSum(numbers, target) {
//  arrResult = [];

//  numbers.forEach((num1, index1) => {
//    numbers.forEach((num2, index2) => {
//      if (num1 + num2 === target && arrResult.length < 2 && index1 !== index2) {
//        arrResult.push(index1);
//        arrResult.push(index2);
//      }
//    });
//  });
//  return arrResult;
//}

//console.log(twoSum([2, 2, 3], 4));

//function sortArray(array) {
//  const oddArr = array
//    .filter((elem) => elem % 2 !== 0)
//    .sort((a, b) => (a > b ? 1 : -1));
//  console.log(oddArr);
//  counter = 0;
//  const arr = array.map((elem, index) => {
//    if (elem % 2 !== 0) {
//      elem = oddArr[counter];
//      counter++;
//    }
//    return elem;
//  });
//  return arr;
//}

//console.log(sortArray([-1, 8, -7, 6, -5, 4, 3, 2, 1, 0]));

//function createArr(length, value) {
//  const arr = new Array(length);
//  //for (let i = 0; i < length; i++) {
//  //  arr.push(value);
//  //}
//  return arr.fill(value);
//}

////console.log(createArr(2, "test")); // ['test', 'test']
////console.log([].fill("test"));

////function uniqArr(arr) {
////  const arrNew = [];
////  let counter = 0;
////  for (let i = 0; i < arr.length; i++) {
////    //arrNew.includes(arr[i]) ? "" : arrNew.push(arr[i]);
////    if (!arrNew.includes(arr[i])) {
////      arrNew[counter] = arr[i];
////      counter++;
////    }
////  }
////  return arrNew;
////}

////const t = [1, 2, 3, 4, 2, 1, 3, 6, 7];

////console.log(uniqArr([1, 2, 3, 4, 2, 1, 3, 6, 7]));

////console.log(new Set(t))

////[].push()
////[].pop()
////[].last()

//Array.prototype.last = function () {
//  return this[this.length - 1];
//};

////console.log([1, 2, 3, 4, 5].last());

//function uniqArr(arr) {
//  const obj = {};
//  for (let i = 0; i < arr.length; i++) {
//    if (obj[arr[i]]) {
//      obj[arr[i]] += 1;
//    } else {
//      obj[arr[i]] = 1;
//    }
//  }

//  const unqArr = Object.entries(obj).sort((a, b) => (a[1] > b[1] ? -1 : 1));

//  return unqArr.map((elem) => +elem[0]);
//}

////const arr2 = [1, 2, 3, 4, 2, 1, 3, 6, 3, 2, 2]; // [2, 3, 1, 4, 6]

//console.log(uniqArr([1, 2, 3, 4, 2, 1, 3, 6, 3, 2, 2]));

// ------------------------------------------------------------

// Task 1-----------------------

//Напишите программу, которая будет преобразовывать число от 1 до 12 в соответствующее название месяца (Январь, февраль, ...)

//const obj = {
//  1: "Январь",
//  2: "Февраль",
//  3: "Март",
//  4: "Апрель",
//  5: "Май",
//  6: "Июнь",
//  7: "Июль",
//  8: "Август",
//  9: "Сентябрь",
//  10: "Октябрь",
//  11: "Ноябрь",
//  12: "Декабрь",
//};

//function numToMonth(num) {
//  return obj[num];
//}

//console.log(numToMonth(12));

// Task 2-----------------------

//Есть следующий объект с данными:

//const obj = {
//  Минск: "Беларусь",
//  Москва: "Россия",
//  Киев: "Украина",
//};
//////Перебирая циклом этого объекта, выведите на экран:

//////Минск - это Беларусь, Москва - это Россия, Киев - это Украина

////for (const [key, value] of Object.entries(obj)) {
////  console.log(`${key} - это ${value}`);
////}

//for (const key in obj) {
//  console.log(`${key} - это ${obj[key]}`);
//}

// Task 3-----------------------

//Есть 2 массива

//var a = ["a", "b", "c"];
//var b = [1, 2, 3];
////Объедините их, чтобы получилось

////['a', 'b', 'c', 1, 2, 3]

//const c = a.concat(b);
//console.log(c);

// Task 4-----------------------

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] одной командой.

//const arr = [1, 2, 3];
////arr.reverse();
//const arrNew = [];
//for (i = arr.length - 1; i >= 0; i--) {
//  arrNew.push(arr[i]);
//}
//console.log(arrNew);

// Task 5-----------------------

//У нас есть объект

//var obj = {
//  name: ["Вася", "Петя", "Коля"],
//  age: [11, 30, 20],
//};
////Получите Петю из массива arr.

////Посчитайте, сколько элементов находится в name.

//function getNameAndCountElements() {
//  console.log(Object.values(obj.name).length);
//  const a = Object.values(obj.name).find((elem) => elem === "Петя");
//  console.log(a);
//}
//getNameAndCountElements();

// Task 6-----------------------

//Поиск по массиву объектов

//Имеется массив объектов

//arr = [
//  { id: "1", prop1: "val1" },
//  { id: "2", prop1: "val2" },
//];
////Этот набор данных формируется выборкой из базы данных. Нужно получить объект, у которого id=2.

//console.log(arr.find((elem) => elem.id === "2"));

// Task 7-----------------------

//У нас есть некий массив с данными:

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
////Проверьте, есть ли в этом массиве значение Banana
//console.log(fruits.some((elem) => elem === "Banana"));

// Task 8-----------------------

//У вас есть массив

//var arr = ["Hi", "Hello", "Bonjour"];
////Напишите программу, которая будет проверять, если в этом массиве нет ни одного элемента, будет выдано сообщение, что массив arr пустой. Для проверки количества элементов в массиве нельзя использовать операторы сравнения, например, знак больше ">".
//console.log(arr.length ? true : false);

// Task 9-----------------------

//Удалите из этого массива элемент 5, и положите туда же 55.

//const array = [2, 5, 9];
//const number5 = array.indexOf(5);
//array.splice(number5, 1, 55);
////array.forEach((elem, index) => {
////  elem === 5 && (array[index] = 55);
////});

//console.log(array);

// Task 9-----------------------

//Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.

//const array = [2, 5, 9];

////let copyArr = [3].concat(array);
//const copyArr = JSON.stringify(array) //'[2, 5, 9]'
//console.log(array);
////function newCopyArr(arr) {
////  copyArr = [...arr];
////}
////newCopyArr(array);
//console.log(JSON.parse(copyArr));

// CODEWARS -------------------------------------------------

//function pigIt(str) {
//  const arr = str.split(" ");
//  let firstLetter;
//  const exceptions = ["!", ".", ",", ";", ":", "?"];
//  const newArr = arr.map((elem1) => {
//    if (!exceptions.some((elem2) => elem1 === elem2)) {
//      firstLetter = elem1[0];
//      elem1 = `${elem1.slice(1)}${firstLetter}ay`;
//    }
//    return elem1;
//  });
//  return newArr.join(" ");
//}

//console.log(pigIt("Hello world !"));

//function pigIt(str) {
//  const arr = str.split(" ");
//  let firstLetter;
//  const newArr = arr.map((elem) => {
//    if (
//      elem !== "!" &&
//      elem !== "." &&
//      elem !== "," &&
//      elem !== ";" &&
//      elem !== ":" &&
//      elem !== "?"
//    ) {
//      firstLetter = elem[0];
//      elem = `${elem.slice(1)}${firstLetter}ay`;
//    }
//    return elem;
//  });
//  return newArr.join(" ");
//}

//function duplicateCount(text) {
//  const arr = text.split("");
//  const obj = {};
//  let counter = 0;
//  arr.forEach((element) => {
//    if (obj[element.toLowerCase()]) {
//      obj[element.toLowerCase()] += 1;
//    } else {
//      obj[element.toLowerCase()] = 1;
//    }
//  });
//  for (const [key, value] of Object.entries(obj)) {
//    value > 1 && counter++;
//  }
//  return counter;
//}

//console.log(duplicateCount("abcde"));

//function findEvenIndex(arr) {
//  let sum1 = 0;
//  let sum2 = arr.slice(1).reduce((acc, elem) => acc + elem, 0);
//  let i = 0;
//  while (sum1 !== sum2 && i < arr.length - 1) {
//    sum1 = arr.slice(0, i + 1).reduce((acc, elem) => acc + elem, 0);
//    sum2 = arr.slice(i + 2).reduce((acc, elem) => acc + elem, 0);
//    console.log(sum1, sum2, i);
//    i++;
//  }

//  return sum1 === sum2 ? i : -1;
//}
//console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));

//function humanReadable(seconds) {
//  const hours = Math.floor(seconds / 60 / 60);
//  const minutes = Math.floor(seconds / 60) - hours * 60;
//  const sec = seconds % 60;
//  const str = `${hours.toString().padStart(2, "0")}:${minutes
//    .toString()
//    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
//  return str;
//}

//function int32ToIp(int32) {
//  const str1 = int32.toString(2).padStart(32, "0");

//  let str2 = "";
//  for (let i = 0; i < 32; i += 8) {
//    str2 += `${str1.slice(i, i + 8)}${i > 23 ? "" : " "}`;
//  }
//  return str2
//    .split(" ")
//    .map((elem) => parseInt(elem, 2))
//    .join(".");
//}

//console.log(int32ToIp(2149583361));

// Занятия --------------------------------------

// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

const obj = {};
const arr = [];

function isObj(a) {
  return typeof a === "object" && !Array.isArray(a) && a !== null;
}

console.log(isObj(null));
