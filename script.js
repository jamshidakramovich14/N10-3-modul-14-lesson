"use strict"


// -------------------- 1-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 1; i <= n; i++) {
//   array.push(i);
// }

// console.log("Massiv elementlari:");
// console.log(array);

// -------------------- 1-masala end --------------------





// -------------------- 2-masala start --------------------

// let n = parseInt(prompt("Sonni kiriting:"));
// let array = [];

// for (let i = 1; i <= n; i++) {
//   let element = Math.pow(2, i);
//   array.push(element);
// }

// console.log("Massiv elementlari:");
// console.log(array);

// -------------------- 2-masala end --------------------






// -------------------- 3-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i <= n; i++) {
//   let sum = 0;
//   for (let j = 0; j <= i; j++) {
//     sum += array[j];
//   }
//   array.push(sum);
// }

// console.log("Massiv elementlari:");
// console.log(array);

// -------------------- 3-masala end --------------------





// -------------------- 4-masala start --------------------

// let a = [];

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 1) {
//     a[i] = i * 10;
//   } else {
//     a[i] = 100 - i;
//   }
// }

// let sumOfOdds = 0;
// let differenceOfEvens = 0;

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 1) {
//     sumOfOdds += a[i];
//   } else {
//     differenceOfEvens -= a[i];
//   }
// }

// console.log("Massiv elementlari:");
// console.log(a);
// console.log("Toqlar yig'indisi:", sumOfOdds);
// console.log("Juftlar ayirmasi:", differenceOfEvens);

// -------------------- 4-masala end --------------------






// -------------------- 5-masala start --------------------

// let n = parseInt(prompt("Sonni kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Massivning a[${i}] elementini kiriting:`));
//   array.push(value);
// }

// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum += array[i];
// }

// console.log("Massiv elementlari:");
// console.log(array);
// console.log("Elementlar yig'indisi:", sum);

// -------------------- 5-masala end --------------------





// -------------------- 6-masala start --------------------

// let n = parseInt(prompt("Sonni kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Massivning a[${i}] elementini kiriting:`));
//   array.push(value);
// }

// console.log("Berilgan massiv:");
// console.log(array);

// array.sort(function(a, b) {
//   return b - a;
// });

// console.log("Kamayish tartibidagi massiv:");
// console.log(array);

// -------------------- 6-masala end --------------------






// -------------------- 7-masala start --------------------

// let a = {
//     ism: 'Kamol',
//     yosh: 22
//   };
  
//   let b = {
//     ism: 'Komil',
//     yosh: 25
//   };
  
//   let c = {
//     ism: 'Shoxrux',
//     yosh: 20
//   };
  
//   let yoshFarqi = Math.abs(a.yosh - b.yosh);
  
//   console.log("Yoshlar farqi:", yoshFarqi);

// -------------------- 7-masala end --------------------





// -------------------- 8-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Massivning a[${i}] elementini kiriting:`));
//   array.push(value);
// }

// let K = parseInt(prompt("K sonini kiriting:"));
// let L = parseInt(prompt("L sonini kiriting:"));

// let indexSum = 0;
// let kIndex = -1;
// let lIndex = -1;

// for (let i = 0; i < n; i++) {
//   if (array[i] === K) {
//     kIndex = i;
//   }
//   if (array[i] === L) {
//     lIndex = i;
//   }
// }

// if (kIndex !== -1 && lIndex !== -1) {
//   indexSum = kIndex + lIndex;
// }

// console.log("Massiv elementlari:");
// console.log(array);
// console.log("K indeksi:", kIndex);
// console.log("L indeksi:", lIndex);
// console.log("Indekslar yig'indisi:", indexSum);

// -------------------- 8-masala end --------------------




// -------------------- 9-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Massivning a[${i}] elementini kiriting:`));
//   array.push(value);
// }

// let maxIndex = -1;

// for (let i = 0; i < n; i += 2) {
//   if (maxIndex === -1 || array[i] > array[maxIndex]) {
//     maxIndex = i;
//   }
// }

// console.log("Massiv elementlari:");
// console.log(array);
// console.log("Eng katta indeks:", maxIndex);
// console.log("Eng katta qiymat:", array[maxIndex]);

// -------------------- 9-masala end --------------------






// -------------------- 10-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Massivning a[${i}] elementini kiriting:`));
//   array.push(value);
// }

// let minIndex = -1;

// for (let i = 0; i < n; i += 2) {
//   if (minIndex === -1 || array[i] < array[minIndex]) {
//     minIndex = i;
//   }
// }

// console.log("Massiv elementlari:");
// console.log(array);
// console.log("Eng kichik indeks:", minIndex);
// console.log("Eng kichik qiymat:", array[minIndex]);

// -------------------- 10-masala end --------------------






// -------------------- 11-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Massivning a[${i}] elementini kiriting:`));
//   array.push(value);
// }

// let maxIndex = -1;

// for (let i = 1; i < n; i += 2) {
//   if (maxIndex === -1 || array[i] > array[maxIndex]) {
//     maxIndex = i;
//   }
// }

// console.log("Massiv elementlari:");
// console.log(array);
// console.log("Toq indekslar orasidan eng katta indeks:", maxIndex);
// console.log("Toq indekslar orasidan eng katta qiymat:", array[maxIndex]);

// -------------------- 11-masala start --------------------
