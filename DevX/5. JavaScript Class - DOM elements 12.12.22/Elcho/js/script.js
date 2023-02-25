// let redElement = document.getElementsByTagName("h1");
// for (let x = 0; x < redElement.length; x++) {
// 	redElement[x].innerHTML = "This is the " + x + "element!";
// }

// for (let x = 1; x < 101; x += 5) {
// 	console.log(x);
// }

// const birthYear = prompt("Введите год вашего рождения: ");
// const currentYear = new Date().getFullYear();
// const age = currentYear - birthYear;
//
// console.log(`Ваш возраст: ${age} лет.`);

// const refreshSeconds = () => {
// 	let year = new Date().getSeconds();
// 	console.log(year);
//
// 	let text = document.querySelector("#elcho");
// 	text.innerHTML = `
// 	<h1>${year}</h1>
// 	`;
// };
// setInterval(refreshSeconds, 1000);

// let arr = [];
//
// for (let x = 0; x < 10; x++) {
// 	// arr[x] = x + 1;
// 	arr.push(x + 1);
// 	console.log(arr.length);
// }

const parent = document.getElementById("parent");
const newText = document.createElement("p");
newText.innerHTML = "Elcho";
parent.replaceChild(newText, parent.firstChild);
