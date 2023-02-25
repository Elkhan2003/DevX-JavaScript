// let x = ["apples"];
// let y = ["sugar"];
// if (x == "lemons" && y == "Sugar") {
// 	console.log("Lemonade!");
// } else if (x == "apples" && y == "sugar") {
// 	console.log("Apple Juice!");
// } else {
// 	console.log("Just water");
// }

// ! splice
// // remove 1
// let arr1 = [1, 2, 3, 3, 4, 5];
// arr1.splice(3, 1);
//
// // insert 1
// let arr2 = [1, 2, 4, 5];
// arr2.splice(2, 0, 3);
//
// // remove multiple
// let arr3 = [1, 2, 3, 3, 3, 3, 4, 5];
// arr3.splice(3, 3);
//
// // insert multiple
// let arr4 = [1, 2, 6, 7, 8];
// arr4.splice(2, 0, 3, 4, 5);
//
// // remove and insert
// let arr5 = [1, 2, 3, 4, 4, 4, 4, 8, 9, 10];
// arr5.splice(4, 3, 5, 6, 7);
//
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);

// ! sort()
let arr1 = ["z", "c", "x", "b", "y", "a"];
let arr2 = [456, 12, 98, 876, 1, 23, 345, 100];
let arr3 = [
	"Alex Zachary",
	"Devin Soriano",
	"Zintis May",
	"Charles Messini",
	"Charles Albert"
];
let arr4 = [
	"lightning",
	"fort",
	"to",
	"cat",
	"store",
	"strong",
	"a",
	"markets",
	"phonetic"
];

arr1.sort();
arr2.sort(function (a2, b2) {
	return a2 - b2;
});
arr3.sort(function (a3, b3) {
	return a3.length - b3.length;
});
arr4.sort(function (a4, b4) {
	return a4.length - b4.length;
});

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
